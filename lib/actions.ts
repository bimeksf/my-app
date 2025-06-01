'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import db from '@/lib/db';

export interface Post {
  id: number;
  title: string;
  author?: string | null;
  date?: string | null;
  description: string;
  tags: string ;
}

export async function getAllPosts(): Promise<Post[]> {
  const stmt = db.prepare('SELECT * FROM cards ORDER BY id DESC');
  const rows = stmt.all();
  return rows as Post[];
}
function isInvalidText(text: string | null) {
  return !text || text.trim() === '';
}

type FormStateType = {
  message: string | null;
};

export async function sharePost(prevState: FormStateType, formData: FormData) {
  const title = formData.get('title') as string;
  const author = formData.get('author') as string;  // <--- tady opravena klíč
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
    const stmt = db.prepare(`
      INSERT INTO cards (title, slug, author, tags, description)
      VALUES (?, ?, ?, ?, ?)
    `);
    stmt.run(title, slug, author, tags, description);

    revalidatePath('/posts');
    redirect('/posts');
  } catch (error) {
    console.error(error);
    return { message: 'Saving failed' };
  }
}
