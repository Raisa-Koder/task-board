import React, { JSX } from "react";
import { Task } from "../types/types";
import { CheckCircle, XCircle } from "lucide-react";
import { RxLapTimer } from "react-icons/rx";
import { ICONS } from "@/constants/constants";

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
  const status = task.status ? statusIconStyles[task.status] : null;
  const icon = task?.icon ? ICONS[task?.icon] : null;
  return (
    <div className={`p-4 ${statusColors[task.status || "default"]} rounded-xl`}>
      <div className="flex justify-between items-center">
        {/* Icon + Text block */}
        <div
          className={`flex ${
            task.description ? "items-start" : "items-center"
          }  gap-4 flex-1`}
        >
          {/* Icon */}
          {icon && (
            <div className="p-2 rounded-xl bg-white flex-shrink-0">
              {icon.emoji || <icon.icon className="h-6 w-6 text-gray-800" />}
            </div>
          )}

          {/* Title + optional description */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{task.name}</h3>
            {task.description && (
              <p className="text-sm text-gray-700 leading-snug break-words mt-1">
                {task.description}
              </p>
            )}
          </div>
        </div>

        {/* Status icon (right side) */}
        {status && (
          <div
            className={`p-3 rounded-xl flex items-center justify-center ${status.bg} flex-shrink-0`}
          >
            {status.icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
