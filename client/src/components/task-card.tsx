import React, { JSX } from "react";
import { Task } from "../types/types";
import { CheckCircle, XCircle, MinusCircle } from "lucide-react";
import { RxLapTimer } from "react-icons/rx";

const statusColors: Record<string, string> = {
  "In Progress": "bg-[#F8D57E]",
  Completed: "bg-green-300",
  "Won't Do": "bg-red-200",
  default: "bg-gray-200",
};

// Background and icon color styles for the icon badge on the right
const statusIconStyles: Record<string, { bg: string; icon: JSX.Element }> = {
  "In Progress": {
    bg: "bg-[#FF9B45]",
    icon: <RxLapTimer className="text-white w-4 h-4" />,
  },
  Completed: {
    bg: "bg-green-500",
    icon: <CheckCircle className="text-white w-4 h-4" />,
  },
  "Won't Do": {
    bg: "bg-red-500/75",
    icon: <XCircle className="text-white w-4 h-4" />,
  },
};

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const status = statusIconStyles[task.status] || null;
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

      <div
        className={`p-3 rounded-xl flex items-center justify-center ${status.bg}`}
      >
        {status.icon}
      </div>
    </div>
  );
};

export default TaskCard;
