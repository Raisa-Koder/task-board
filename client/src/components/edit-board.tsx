"use client";
import { apiFetch } from "@/lib/api";
import { boardsAPI } from "@/lib/apiRoutes";
import { Board } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";

interface EditBoardProps {
  boardId: string;
  initialName: string;
  initialDescription?: string;
  setEditing: Dispatch<SetStateAction<boolean>>;
  editing: boolean;
}

const EditBoard = ({
  boardId,
  initialName,
  initialDescription,
  setEditing,
}: EditBoardProps) => {
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const { refresh } = useRouter();

  const handleSave = () => {
    setEditing(false);
    if (!boardId) {
      toast.error("Board id not found");
    }
    const editBoard = async () => {
      try {
        const updateBoard = await apiFetch<Board>(`${boardsAPI}/${boardId}`, {
          method: "PUT",
          body: JSON.stringify({
            name: name.trim(),
            description: description?.trim()
          }),
        });
        toast.success("Board updated successfully");
        refresh();
      } catch (error) {
        toast.error("Failed to update board");
        console.error(error);
      }
    };
    editBoard();
  };

  return (
    <>
      <input
        className="text-3xl font-bold text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:border-amber-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="text-sm text-gray-600 bg-transparent border-b border-gray-200 focus:outline-none focus:border-amber-500"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex gap-2 mt-1">
        <button
          onClick={handleSave}
          className="text-sm text-white bg-amber-500 px-2 py-1 rounded hover:bg-amber-600"
        >
          Save
        </button>
        <button
          onClick={() => setEditing(false)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default EditBoard;
