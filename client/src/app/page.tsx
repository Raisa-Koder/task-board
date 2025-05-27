"use server"
// src/app/page.tsx

import { redirect } from 'next/navigation';
import { boardsAPI } from '@/lib/apiRoutes';
import { apiFetch } from '@/lib/api';

export default async function Home() {
    const data = await apiFetch(boardsAPI, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My Task Board',
      description: "Tasks to keep organised",
    }),
  });

  redirect(`/board/${data._id}`);
}
