"use client";
import { X } from "lucide-react";
import React, { ReactNode, useEffect } from "react";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const SideDrawer = ({ isOpen, onClose, title, children }: SideDrawerProps) => {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex m-3">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" onClick={onClose} />

      {/* Drawer panel */}
      <div className="ml-auto w-full md:w-1/2 h-full bg-white p-6 shadow-lg z-50 overflow-y-auto relative rounded-xl">
        <button
          onClick={onClose}
          className="absolute cursor-pointer right-4 top-4 p-2 border border-blue-200 rounded-lg"
        >
            <X className="w-3 h-3 text-red-400 bg-red-100 rounded-full" />
        </button>

        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SideDrawer;
