import { readInput } from "../utils";

export default function day07() {
  const input = readInput("day07").split("\n");

  let counter = 0;

  const start = input[0].indexOf("S");
  let activeBeams = new Set([start]);

  const SPLITTER = "^";

  for (let row = 2; row < input.length; row++) {
    const buffer = new Set<number>(activeBeams);
    const currentRow = input[row];

    activeBeams.forEach((colToCheck) => {
      if (currentRow[colToCheck] === SPLITTER) {
        buffer.add(colToCheck - 1);
        buffer.add(colToCheck + 1);
        buffer.delete(colToCheck);
        counter++;
      }
    });

    activeBeams = buffer;
  }

  console.log(`Total times beam was splitted: ${counter}`);
}
