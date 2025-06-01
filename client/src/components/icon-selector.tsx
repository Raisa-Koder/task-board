import { IconKey, ICONS } from "@/constants/constants";
import { cn } from "@/lib/utils";
import React from "react";

interface IconSelectorProps {
  value?: IconKey;
  onChange: (icon: IconKey) => void;
}

const IconSelector = ({ value, onChange }: IconSelectorProps) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {Object.entries(ICONS).map(([key, { emoji, icon: Icon }]) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key as IconKey)}
          className={cn(
            "p-2 rounded-xl border ",
            value === key
              ? "border-yellow-300/60 bg-yellow-300/60"
              : "border-gray-300/50 bg-gray-300/50"
          )}
        >
          {<Icon className="h-6 w-6 text-gray-800" />}
        </button>
      ))}
    </div>
  );
};

export default IconSelector;
