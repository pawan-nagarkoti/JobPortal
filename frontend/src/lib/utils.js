import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function days(d) {
  return Math.floor((new Date() - new Date(d)) / (1000 * 60 * 60 * 24));
}
