// lib/utils.ts
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes correctly (e.g., overrides "p-2 p-4" -> "p-4")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
