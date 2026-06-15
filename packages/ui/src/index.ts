import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const uiTokens = {
  color: {
    ink: "#1b1b1f",
    muted: "#6f6f76",
    blush: "#e92d68",
    blushDark: "#c91f56",
    surface: "#f7f7f8",
    line: "#e7e7ea"
  },
  radius: {
    card: "8px",
    pill: "999px"
  }
};
