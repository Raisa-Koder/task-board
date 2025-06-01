"use server";

import { apiFetch } from "@/lib/api";
import { boardsAPI } from "@/lib/apiRoutes";
import { Board } from "@/types/types";
import ManageBoard from "./manage-board";

export default async function BoardPage({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) {
  const { boardId } = await params;
  const board: Board = await apiFetch(`${boardsAPI}/${boardId}`, {
    method: "GET",
  });

  return <ManageBoard board={board} />;
}
