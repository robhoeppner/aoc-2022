const input = await Deno.readTextFile(
  "C:/Users/Robert/Code/js/aoc/2022/day10/input.txt"
);

const lines = input.split("\n");

let x = 1;
let y = 0;

let i = 0;
let cycle = 1;

let running = true;

let inc = 0;

while (running) {
  if ([20, 60, 100, 140, 180, 220].indexOf(cycle) >= 0) {
    y += x * cycle;
  }

  if (inc !== 0) {
    x += inc;
    inc = 0;
    cycle++;
    continue;
  }

  const cmd = lines[i];

  if (!cmd) {
    running = false;
    break;
  }

  if (cmd.startsWith("addx")) {
    inc = Number(cmd.split(" ")[1]);
  }

  i++;
  cycle++;
}

console.log(y);
