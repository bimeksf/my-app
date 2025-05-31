'use server';

import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

function isInvalidText(text: string | null) {
  return !text || text.trim() === '';
}
type FormStateType = {
  message: string | null;
};
export async function sharePost(prevState: FormStateType, formData: FormData) {
  const title = formData.get('title') as string;
  const author = formData.get('name') as string;
  const tags = formData.get('tags') as string;
  const description = formData.get('description') as string;

  if (
    isInvalidText(title) ||
    isInvalidText(author) ||
    isInvalidText(description) ||
    isInvalidText(tags) 
  ) {
    return { message: 'Invalid input.' };
  }


  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  try {
    await prisma.post.create({
      data: {
        title,
        slug,
        author,
        tags: '', 
        description,
      },
    });

    revalidatePath('/posts'); 
    redirect('/posts');
  } catch (error) {
    console.error(error);
    return { message: 'saving failed' };
  }
}
