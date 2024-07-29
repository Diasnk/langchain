'use server'

import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import clientPromise from '@/lib/mongodb';
import { v4 as uuidv4 } from 'uuid';

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

  try {
    const client = await clientPromise;
    const db = client.db('essaysDB');
    const essays = db.collection('essays');

    const newEssay = {
      id: uuidv4(),
      userId,
      title: essayTitle,
      text: essayText
    };

    await essays.insertOne(newEssay);

    revalidatePath('/essays');
    return { message: '' };
  } catch (error) {
    console.error('Error creating essay:', error);
    return { message: 'An error occurred while saving the essay' };
  }
}

export async function fetchEssays() {
  const { userId } : { userId: string | null } = auth();
  
  if (!userId) {
    return [];
  }

  try {
    const client = await clientPromise;
    const db = client.db('essaysDB');
    const essays = db.collection('essays');

    const userEssays = await essays.find({ userId }).toArray();
    return userEssays;
  } catch (error) {
    console.error('Error fetching essays:', error);
    return [];
  }
}

export async function deleteEssayAction(essayId: string) {
  const { userId } : { userId: string | null } = auth();
  
  if (!userId) {
    return { message: 'User not authenticated' };
  }

  try {
    const client = await clientPromise;
    const db = client.db('essaysDB');
    const essays = db.collection('essays');

    await essays.deleteOne({ id: essayId, userId });

    revalidatePath('/essays');
    return { message: '' };
  } catch (error) {
    console.error('Error deleting essay:', error);
    return { message: 'An error occurred while deleting the essay' };
  }
}
