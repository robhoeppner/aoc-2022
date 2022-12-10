const input = await Deno.readTextFile("./input.txt");

const pairs = input.split("\n").map((line) => line.split(","));

let fullOverlap = 0;
let overlap = 0;

for (const pair of pairs) {
  const rangeA = pair[0].split("-").map((x) => parseInt(x));
  const rangeB = pair[1].split("-").map((x) => parseInt(x));

  if (rangeA[0] >= rangeB[0] && rangeA[1] <= rangeB[1]) {
    fullOverlap++;
  } else if (rangeB[0] >= rangeA[0] && rangeB[1] <= rangeA[1]) {
    fullOverlap++;
  }

  const hasOverlap = rangeA[0] <= rangeB[1] && rangeB[0] <= rangeA[1];
  if (hasOverlap) overlap++;
}

console.log(fullOverlap);
console.log(overlap);
