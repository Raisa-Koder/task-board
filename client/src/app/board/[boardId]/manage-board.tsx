"use client";
import React from "react";
import BoardHeader from "@/components/board-header";
import TaskList from "@/components/task-list";
import { Board } from "@/types/types";

const ManageBoard = ({ board }: { board: Board }) => {
  return (
    <main className="max-w-xl mx-auto py-8 px-4 space-y-6">
      <BoardHeader name={board.name} description={board.description} />
      <TaskList tasks={board.tasks} />
    </main>
  );
};

export default ManageBoard;
