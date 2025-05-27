import React from "react";

interface BoardHeaderProps {
  name: string;
  description?: string;
}

const BoardHeader = ({ name, description }: BoardHeaderProps) => {
  return (
    <header className="space-y-1">
      <div className="text-4xl">
        📚 <span className="font-bold">{name}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </header>
  );
};

export default BoardHeader;
