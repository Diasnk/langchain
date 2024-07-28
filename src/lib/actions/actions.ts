'use server'

import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { promises as fs } from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db2.json');

async function readDatabase() {
  try {
    const data = await fs.readFile(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If the file does not exist or there is an error, return an empty array
    return [];
  }
}

async function writeDatabase(data: any) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}

export async function createWordAction(prevState: any, formData: any) {
  const wordText = formData.get('wordText');

  if (wordText === '') {
    return { message: 'Please enter your essay text' };
  }

  const { userId } = auth();
  const essays = await readDatabase();
  // Ensure essays is an array
  if (!Array.isArray(essays)) {
    throw new Error('Failed to load essays data');
  }
  essays.push({ userId, text: wordText });
  await writeDatabase(essays);

  revalidatePath('/essays');
  return { message: '' };
}

export async function fetchEssays() {
  const essays = await readDatabase();
  // Ensure essays is an array
  if (!Array.isArray(essays)) {
    throw new Error('Failed to load essays data');
  }
  return essays;
}
