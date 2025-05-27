import React from "react";
import { Task } from "../types/types";

const statusColors: Record<string, string> = {
  "In Progress": "bg-yellow-300",
  Completed: "bg-green-300",
  "Won't Do": "bg-red-200",
  default: "bg-gray-200",
};

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl ${
        statusColors[task.status] || statusColors.default
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl">{task.icon || "📌"}</span>
        <div>
          <h3 className="font-semibold text-lg">{task.name}</h3>
          {task.description && (
            <p className="text-sm text-gray-700">{task.description}</p>
          )}
        </div>
      </div>
      <span className="text-2xl">
        {task.status === "Completed"
          ? "✅"
          : task.status === "Won't Do"
          ? "❌"
          : task.status === "In Progress"
          ? "⏳"
          : "•"}
      </span>
    </div>
  );
};

export default TaskCard;
