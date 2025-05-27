"use server";

import { apiFetch } from "@/lib/api";
import { boardsAPI } from "@/lib/apiRoutes";
import { Board } from "@/types/types";
import ManageBoard from "./manage-board";

export default async function BoardPage({
  params,
}: {
  params: { boardId: string };
}) {
  const board: Board = await apiFetch(`${boardsAPI}/${params.boardId}`, {
    method: "GET",
  });

  return <ManageBoard board={board} />;
}
