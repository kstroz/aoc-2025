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

function validate2(num: number): boolean {
  const str = String(num);
  const len = str.length;
  const half = Math.floor(len / 2);

  for (let i = 0; i < half; i++) {
    const subLen = i + 1;

    if (len % subLen !== 0) continue;

    const pattern = str.substring(0, subLen);
    const repeats = len / subLen;

    let isValid = true;

    for (let j = 0; j < repeats; j++) {
      if (str.substring(j * subLen, j * subLen + subLen) !== pattern) {
        isValid = false;
        break;
      }
    }

    if (isValid) return false;
  }

  return true;
}

export default function day02() {
  const input = readInput("day02").split(/[\n,]+/);

  let counter = 0;
  let counter2 = 0;

  input.forEach((value) => {
    const arr = value.split("-");

    const left = Number(arr[0]);
    const right = Number(arr[1]);

    for (let i = left; i <= right; i++) {
      if (!validate(i)) {
        counter += i;
      }

      if (!validate2(i)) {
        counter2 += i;
      }
    }
  });

  console.log(`Answer for part1 is ${counter}`);
  console.log(`Answer for part2 is ${counter2}`);
}
