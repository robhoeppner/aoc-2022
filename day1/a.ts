const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n\n");

const sum = lines.map((el) =>
  el
    .split("\n")
    .map((el) => parseInt(el, 10))
    .reduce((a, b) => a + b)
);

const a = sum.sort((a, b) => b - a)[0];
const b = sum
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => a + b);

console.log("a: " + a);
console.log("b: " + b);
