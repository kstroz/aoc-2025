import { readInput } from "../utils";

interface Point {
  x: number;
  y: number;
}

function calculateArea(p1: Point, p2: Point): number {
  const yLen = Math.max(p1.y, p2.y) - Math.min(p1.y, p2.y) + 1;
  const xLen = Math.max(p1.x, p2.x) - Math.min(p1.x, p2.x) + 1;

  return yLen * xLen;
}

export default function day09() {
  const input: Point[] = readInput("day09")
    .split("\n")
    .map((value) => {
      const [x, y] = value.split(",").map(Number);

      return { x, y };
    });

  let max = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const p1 = input[i];
      const p2 = input[j];

      max = Math.max(calculateArea(p1, p2), max);
    }
  }

  console.log(`Biggest rectangle area is: ${max}`);
}
