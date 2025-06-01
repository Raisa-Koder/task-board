"use client";
import React, { useState } from "react";
import { BsStack } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi";
import EditBoard from "./edit-board";

interface BoardHeaderProps {
  name: string;
  description?: string;
  boardId: string;
}

const BoardHeader = ({ name, description, boardId }: BoardHeaderProps) => {
  const [editing, setEditing] = useState(false);
  return (
    <header className="py-6">
      <div className="flex items-center gap-4">
        {/* Icon with layered shadow effect */}
        <div className="relative w-10 h-10">
          <BsStack className="retative text-amber-500 h-full w-full" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1">
          {editing ? (
            <EditBoard
              boardId={boardId}
              initialDescription={description}
              initialName={name}
              setEditing={setEditing}
              editing={editing}
            />
          ) : (
            <>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
                <button onClick={() => setEditing(true)}>
                  <BiSolidPencil className="text-gray-400 w-4 h-4 hover:text-gray-600" />
                </button>
              </div>
              <p className="text-gray-500 text-sm">{description}</p>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default BoardHeader;
