import fs from "fs";
import path from "path";

export function readInput(day: string, trim: boolean = true): string {
  const filePath = path.join(__dirname, day, "input.txt");

  if (trim) {
    return fs.readFileSync(filePath, "utf8").trim();
  }

  return fs.readFileSync(filePath, "utf8");
}
