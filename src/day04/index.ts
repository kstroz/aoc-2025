import { readInput } from "../utils";

function validateAccess(
  input: string[],
  rowToCheck: number,
  colToCheck: number
): boolean {
  if (input[rowToCheck][colToCheck] !== "@") return false;

  let counter = 0;

  for (let row = -1; row < 2; row++) {
    for (let col = -1; col < 2; col++) {
      if (row === 0 && col === 0) continue;

      const value = input[rowToCheck + row]?.[colToCheck + col];

      if (value === "@") {
        counter++;

        if (counter >= 4) return false;
      }
    }
  }

  return true;
}

export default function day04() {
  const input = readInput("day04").split("\n");

  let counter = 0;

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (validateAccess(input, row, col)) {
        counter++;
      }
    }
  }

  console.log(`Forklift can access: ${counter} rolls`);
}
