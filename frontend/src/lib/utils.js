import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// convert into days
export function days(d) {
  return Math.floor((new Date() - new Date(d)) / (1000 * 60 * 60 * 24));
}

// convert into full date
export function date(v) {
  const isoDate = v;
  const date = new Date(isoDate);

  // To get IST time (optional, if you want local India date):
  const istDate = new Date(
    date.getTime() + date.getTimezoneOffset() * 60000 + 5.5 * 3600000,
  );

  const day = istDate.getDate();
  const month = istDate.toLocaleString("en-US", { month: "short" });
  const year = istDate.getFullYear();

  return `${day} ${month}, ${year}`;
}

// count remaining days from today to expiray date
export function remainingDate(v) {
  const targetDate = new Date(v);
  const now = new Date();

  const diffInMs = targetDate.getTime() - now.getTime();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
}

export const getSocialUrl = (url) => {
  if (!url) return "#";

  const trimmedUrl = url.trim();

  if (/^(https?:)?\/\//i.test(trimmedUrl)) {
    return trimmedUrl;
  }

  return `https://${trimmedUrl}`;
};
