"use client";
import React from "react";
import BoardHeader from "@/components/board-header";
import TaskList from "@/components/task-list";
import { Board } from "@/types/types";
import AddTask from "@/components/add-task";

const ManageBoard = ({ board }: { board: Board }) => {
  return (
    <main className="max-w-xl mx-auto py-8 px-4 space-y-6">
      <BoardHeader name={board.name} description={board.description} boardId={board._id} />
      <TaskList tasks={board.tasks} />
      <AddTask boardId={board._id} />
    </main>
  );
};

export default ManageBoard;
