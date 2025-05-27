"use client";
import { taskSchema } from "@/lib/zodSchema";
import { Task } from "@/types/types";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import IconSelector from "./icon-selector";
import StatusSelector from "./status-selector";
import { Check } from "lucide-react";
import { Trash2 } from "lucide-react";

interface TaskModalProps {
  task?: Task;
  onSave: (task: Partial<Task>) => void;
  onDelete?: (taskId: string) => void;
}

type FormValues = z.infer<typeof taskSchema>;

const TaskForm = ({ task, onSave, onDelete }: TaskModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      name: task?.name || "New Task",
      description: task?.description || "",
      icon: task?.icon || undefined,
      status: task?.status || undefined,
    },
  });

  const onSubmit = (data: FormValues) => {
    onSave({
      ...task,
      ...data,
    });
  };

  const icon = watch("icon");
  const status = watch("status");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-xs font-medium text-gray-700/50">
          Task name
        </label>
        <input
          {...register("name")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
        />
        {errors?.name && (
          <p className="text-red-600 text-sm mt-1">{errors.name?.message}</p>
        )}
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700/50">
          Description
        </label>
        <textarea
          {...register("description")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-48 mt-1"
          placeholder="Enter a short description"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700/50 mb-2">
          Icon
        </label>
        <IconSelector value={icon} onChange={(val) => setValue("icon", val)} />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-700/50 mb-2">
          Status
        </label>
        <StatusSelector
          value={status}
          onChange={(val) => setValue("status", val)}
        />
      </div>

      <div className="mt-6 pt-4 flex justify-end gap-4">
        {onDelete && task?._id && (
          <button
            type="button"
            onClick={() => onDelete(task?._id)}
            className="flex items-center gap-2 px-6 py-1.5 rounded-full text-sm text-white bg-gray-400 hover:bg-gray-500"
          >
            <span>Delete</span>
            <Trash2 size={19} />
          </button>
        )}

        <button
          type="submit"
          className="flex items-end gap-2 px-6 py-1.5 rounded-full bg-blue-600/90 text-white text-sm hover:bg-blue-700 transition"
        >
          <span>Save</span>{" "}
          <span>
            <Check size={19} />
          </span>
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
