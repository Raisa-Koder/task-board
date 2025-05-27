"use server";
import BoardHeader from "@/components/board-header";
import TaskCard from "@/components/task-card";
// Example: src/app/board/[boardId]/page.tsx
import { apiFetch } from "@/lib/api";
import { boardsAPI } from "@/lib/apiRoutes";
import { Board } from "@/types/types";

export default async function BoardPage({
  params,
}: {
  params: { boardId: string };
}) {
  const board: Board = await apiFetch(`${boardsAPI}/${params.boardId}`, {
    method: "GET",
  });

  return (
    <main className="max-w-xl mx-auto py-8 px-4 space-y-6">
      <BoardHeader name={board.name} description={board.description} />

      {board.tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </main>
  );
}
