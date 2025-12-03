import { readInput } from "../utils";

export default function day03() {
  const input = readInput("day03").split("\n");

  let totalJoltage = 0;

  input.forEach((bank) => {
    let left = 0;
    let right = 0;
    let idx = 0;

    for (let i = 0; i < bank.length - 1; i++) {
      const joltage = Number(bank[i]);

      if (joltage > left) {
        left = joltage;
        idx = i + 1;
      }
    }

    for (let j = idx; j < bank.length; j++) {
      right = Math.max(Number(bank[j]), right);
    }

    totalJoltage += Number(`${left}${right}`);
  });

  console.log(`Total joltage is: ${totalJoltage}`);
}
