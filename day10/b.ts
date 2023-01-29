const input = await Deno.readTextFile(
  "C:/Users/Robert/Code/js/aoc/2022/day10/input.txt"
);

const lines = input.split("\n");

const screen: string[] = ["", "", "", "", "", ""];

let x = 1;

let i = 0;
let cycle = 1;

let running = true;

let inc = 0;

while (running) {
  const row = Math.floor((cycle - 1) / 40);
  const posX = cycle - 1 - row * 40;

  if (row < 6) {
    if (Math.abs(posX - x) < 2) {
      screen[row] += "#";
    } else {
      screen[row] += ".";
    }
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
console.log(screen);
