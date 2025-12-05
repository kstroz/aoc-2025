import { readInput } from "../utils";

function mergeRange(ranges: number[][]): number[][] {
  ranges.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [];

  for (let i = 0; i < ranges.length; i++) {
    let start = ranges[i][0];
    let end = ranges[i][1];

    if (result.length > 0 && result[result.length - 1][1] >= end) {
      continue;
    }

    for (let j = i + 1; j < ranges.length; j++) {
      if (ranges[j][0] <= end) {
        end = Math.max(end, ranges[j][1]);
      }
    }

    result.push([start, end]);
  }

  return result;
}

export default function day05() {
  const input = readInput("day05").split("\n");

  const ranges: number[][] = [];
  const ids: number[] = [];

  for (const value of input) {
    if (value.includes("-")) {
      ranges.push(value.split("-").map((el) => Number(el)));
    } else if (value !== "") {
      ids.push(Number(value));
    }
  }

  const merged = mergeRange(ranges);

  const freshIds = ids.reduce((prvs, curr) => {
    for (let i = 0; i < merged.length; i++) {
      if (curr >= merged[i][0] && curr <= merged[i][1]) {
        return prvs + 1;
      }
    }

    return prvs;
  }, 0);

  const freshIdsInRanges = merged.reduce((prvs, curr) => {
    const diff = curr[1] - curr[0];

    return prvs + diff + 1;
  }, 0);

  console.log(`There are ${freshIds} fresh ingredients`);
  console.log(
    `There are ${freshIdsInRanges} fresh ingredients according to the fresh ingredient ID ranges`
  );
}
