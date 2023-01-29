const rope = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];

const grid = new Set<string>();

const input = (
  await Deno.readTextFile("C:/Users/Robert/Code/js/aoc/2022/day9/input.txt")
)
  .split("\n")
  .map((line) => line.split(" "));

// console.log(input);

const checkRope = () => {
  for (let i = 1; i < rope.length; i++) {
    const t0 = rope[i - 1];
    const t1 = rope[i];

    const dx = t0.x - t1.x;
    const dy = t0.y - t1.y;

    if (Math.abs(dx) > 1) {
      t1.x += dx > 0 ? 1 : -1;
      if (Math.abs(dy) != 0) t1.y += dy > 0 ? 1 : -1;
    } else if (Math.abs(dy) > 1) {
      t1.y += dy > 0 ? 1 : -1;
      if (Math.abs(dx) != 0) t1.x += dx > 0 ? 1 : -1;
    }
  }
};

for (const command of input) {
  const [dir, distance] = command;

  for (let i = 0; i < Number(distance); i++) {
    if (dir === "U") rope[0].y--;
    if (dir === "D") rope[0].y++;
    if (dir === "L") rope[0].x--;
    if (dir === "R") rope[0].x++;

    checkRope();

    grid.add(`${rope[9].x},${rope[9].y}`);
  }
}

console.log(grid.size);
