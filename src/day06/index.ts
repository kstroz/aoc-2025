import { readInput } from "../utils";

export default function day06() {
  const input = readInput("day06").split("\n");

  const cleanArr = input.map((line) => line.split(" ").filter(Boolean));

  const rows = cleanArr.length - 1;

  let total = 0;

  for (let col = 0; col < cleanArr[0].length; col++) {
    const isAdding = cleanArr[rows][col] === "+";
    let counter = Number(!isAdding);

    for (let row = 0; row < rows; row++) {
      const value = Number(cleanArr[row][col]);
      counter = isAdding ? counter + value : counter * value;
    }

    total += counter;
  }

  console.log(`Total is ${total}`);
}
