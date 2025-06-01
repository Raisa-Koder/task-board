import React from "react";
import { Task } from "../types/types";
import { PlusIcon } from "lucide-react";
import { apiFetch } from "@/lib/api";
import { taskAPI } from "@/lib/apiRoutes";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface AddTaskProps {
  boardId: string;
}

const AddTask = ({ boardId }: AddTaskProps) => {
  const { refresh } = useRouter();
  const createTask = () => {
    const addTask = async () => {
      try {
        await apiFetch<Task>(`${taskAPI}/`, {
          method: "POST",
          body: JSON.stringify({ boardId }),
        });
        toast.success("New task created successfully");
        refresh();
      } catch (error) {
        toast.error("Failed to create a new task");
        console.error(error);
      }
    };
    addTask();
  };
  return (
    <div
      className={`p-4 bg-[#f5e8d5] rounded-xl cursor-pointer`}
      onClick={createTask}
    >
      <div className="flex justify-between items-center">
        {/* Status icon (left side) */}

        {/* Add new Task */}
        <div className={`flex items-center  gap-4 flex-1`}>
          {/* Icon */}
          <div
            className={`p-3 rounded-xl flex items-center justify-center bg-[#e9a23b]  flex-shrink-0`}
          >
            <div className="rounded-full p-0.5 bg-[#edb86b]">
              <PlusIcon className="text-white w-3 h-3 font-medium" />
            </div>
          </div>

          {/* add new task */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Add new task
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
