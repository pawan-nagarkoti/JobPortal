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
