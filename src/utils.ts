import fs from "fs";
import path from "path";

export function readInput(day: string): string {
  const filePath = path.join(__dirname, day, "input.txt");
  return fs.readFileSync(filePath, "utf8").trim();
}
