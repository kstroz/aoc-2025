import { readInput } from "../utils";

function validate(num: Number): boolean {
  const str = String(num);

  if (str.length % 2 === 1) {
    return true;
  }

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length / 2 + i]) {
      return true;
    }
  }

  return false;
}

export default function day02() {
  const input = readInput("day02").split(/[\n,]+/);

  let counter = 0;

  input.forEach((value) => {
    const arr = value.split("-");

    const left = Number(arr[0]);
    const right = Number(arr[1]);

    for (let i = left; i <= right; i++) {
      if (!validate(i)) {
        counter += i;
      }
    }
  });

  console.log(`Answer is ${counter}`);
}
