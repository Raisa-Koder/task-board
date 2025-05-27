"use client";
import { CheckCircle, XCircle } from "lucide-react";
import { RxLapTimer } from "react-icons/rx";
import { cn } from "@/lib/utils";
import { statuses } from "@/constants/constants";

interface StatusSelectorProps {
  value: "In Progress" | "Completed" | "Won't Do" | undefined;
  onChange: (
    status: "In Progress" | "Completed" | "Won't Do" | undefined
  ) => void;
}

const StatusSelector = ({ value, onChange }: StatusSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {statuses.map((s) => (
        <button
          key={s.value}
          type="button"
          onClick={() => onChange(s.value)}
          className={cn(
            "flex gap-2 p-1 rounded-xl items-center bg-white border border-gray-500/50 font-serif",
            value === s.value && "ring-1 ring-blue-500 outline-none"
          )}
        >
          <div
            className={`p-3 rounded-xl flex items-center justify-center ${s.color}`}
          >
            {s.value === "Completed" ? (
              <CheckCircle className="w-4 h-4" />
            ) : s.value === "Won't Do" ? (
              <XCircle className="w-4 h-4" />
            ) : (
              <RxLapTimer className="w-4 h-4" />
            )}
          </div>
          {s.label}
        </button>
      ))}
    </div>
  );
};

export default StatusSelector;
