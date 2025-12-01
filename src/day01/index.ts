import { readInput } from "../utils";

// https://adventofcode.com/2025/day/1
export default function day01() {
  const input = readInput("day01").split("\n");

  let position = 50;
  let password = 0;

  input.forEach((value) => {
    const direction = value[0] as "L" | "R";
    const numOfRotation = Number(value.slice(1)) % 100;

    const result =
      position + (direction === "L" ? -numOfRotation : numOfRotation);

    if (result < 0) {
      position = result + 100;
    } else if (result >= 100) {
      position = result - 100;
    } else {
      position = result;
    }

    console.log(`New position: ${position}`);

    if (position === 0) {
      password += 1;
    }
  });

  console.log(`\nPassword: ${password}`);
}
