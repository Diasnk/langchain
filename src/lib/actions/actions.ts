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
  const essayTitle = formData.get('essayTitle');
  const essayText = formData.get('essayText');

  if (!essayTitle || !essayText) {
    return { message: 'Please enter both your essay title and text' };
  }

  const { userId } : { userId: string | null } = auth();
  
  if (!userId) {
    return { message: 'User not authenticated' };
  }

  const essays = await readDatabase();
  // Ensure essays is an array
  if (!Array.isArray(essays)) {
    throw new Error('Failed to load essays data');
  }
  essays.push({ userId, title: essayTitle, text: essayText });
  await writeDatabase(essays);

  revalidatePath('/essays');
  return { message: '' };
}

export async function fetchEssays() {
  const { userId } : { userId: string | null } = auth();
  
  if (!userId) {
    return [];
  }

  const essays = await readDatabase();
  // Ensure essays is an array
  if (!Array.isArray(essays)) {
    throw new Error('Failed to load essays data');
  }
  // Filter essays to include only those that belong to the current user
  return essays.filter((essay: { userId: string; title: string; text: string }) => essay.userId === userId);
}
