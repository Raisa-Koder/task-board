"use client";
import React, { useState } from "react";
import { Task } from "../types/types";
import TaskCard from "./task-card";
import SideDrawer from "./side-drawer";
import TaskForm from "./task-form";
import { apiFetch } from "@/lib/api";
import { taskAPI } from "@/lib/apiRoutes";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  const { refresh } = useRouter();
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();
  const openDrawer = (task: Task) => setSelectedTask(task);
  const closeDrawer = () => setSelectedTask(undefined);

  const onSave = (task: Partial<Task>) => {
    if (!task._id) {
      toast.error("Task ID is missing!");
      return;
    }
    const editTask = async () => {
      try {
        await apiFetch<Task>(
          `${taskAPI}/${task._id}`,
          {
            method: "PUT",
            body: JSON.stringify(task),
          }
        );
        toast.success("Task updated successfully");
        refresh();
        closeDrawer();
      } catch (error) {
        toast.error("Failed to update task");
        console.error(error);
      }
    };
    editTask();
  };

  const onDelete = (taskId: string) => {
    const deleteTask = async () => {
      try {
        await apiFetch(`${taskAPI}/${taskId}`, { method: "DELETE" });
        toast.success("Task deleted successfully");
        refresh();
        closeDrawer();
      } catch (error) {
        toast.error("Failed to delete task");
        console.error(error);
      }
    };
    deleteTask();
  };

  return (
    <>
      {tasks.map((task) => (
        <div key={task._id} onClick={() => openDrawer(task)}>
          <TaskCard task={task} />
        </div>
      ))}

      <SideDrawer
        isOpen={!!selectedTask}
        onClose={closeDrawer}
        title="Task Details"
      >
        <TaskForm onSave={onSave} task={selectedTask} onDelete={onDelete} />
      </SideDrawer>
    </>
  );
};

export default TaskList;
