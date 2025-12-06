import { readInput } from "../utils";

export default function day06() {
  const input = readInput("day06", false).split("\n");

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

  console.log(`First answer is ${total}`);

  let total2 = 0;
  let buffer = [];

  for (let i = input[0].length - 1; i >= 0; i--) {
    let current = "";

    for (let j = 0; j <= input.length - 1; j++) {
      const char = input[j][i];

      const isOperator = char === "*" || char === "+";
      const isValidChar = char !== " " && !isOperator;

      if (isValidChar) {
        current += char;
      }

      if (isOperator) {
        const isAdd = char === "+";
        buffer.push(current);

        const result = buffer.reduce(
          (acc, val) => (isAdd ? acc + Number(val) : acc * Number(val)),
          isAdd ? 0 : 1
        );

        total2 += result;
        current = "";
        buffer = [];
      }
    }

    if (current !== "") {
      buffer.push(current);
    }
  }

  console.log(`Second answer is ${total2}`);
}
