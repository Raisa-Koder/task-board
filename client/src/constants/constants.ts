import { LaptopMinimal } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Coffee } from 'lucide-react';
import { Bot } from 'lucide-react';
import { LibraryBig } from 'lucide-react';
import { AlarmClock } from 'lucide-react';

export const ICONS = {
  developer: { emoji: "🧑‍💻", icon: LaptopMinimal},
  chat: { emoji: "💬", icon:  MessageCircle },
  coffee: { emoji: "☕", icon:  Coffee},
  robot: { emoji: "🤖", icon: Bot},
  books: { emoji: "📚", icon:  LibraryBig},
  timer: { emoji: "⏰", icon:  AlarmClock },
};

export const statuses: {label: "In Progress" | "Completed" | "Won't Do", value: "In Progress" | "Completed" | "Won't Do", color: string}[] = [
  { label: "In Progress", value: "In Progress", color: "bg-[#FF9B45]" },
  { label: "Completed", value: "Completed", color: "bg-green-500" },
  { label: "Won't Do", value: "Won't Do", color: "bg-red-500" },
];


export type IconKey = keyof typeof ICONS;