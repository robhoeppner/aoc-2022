const H = { x: 0, y: 0 };
const T = { x: 0, y: 0 };

const grid: {
  x: number;
  y: number;
}[] = [];

const input = (
  await Deno.readTextFile("C:/Users/Robert/Code/js/aoc/2022/day9/input.txt")
)
  .split("\n")
  .map((line) => line.split(" "));

// console.log(input);

const checkT = () => {
  if (H.x - T.x > 1) {
    if (H.y - T.y === 1) T.y++;
    if (H.y - T.y === -1) T.y--;
    T.x++;
  }
  if (H.x - T.x < -1) {
    if (H.y - T.y === 1) T.y++;
    if (H.y - T.y === -1) T.y--;
    T.x--;
  }
  if (H.y - T.y > 1) {
    if (H.x - T.x === 1) T.x++;
    if (H.x - T.x === -1) T.x--;
    T.y++;
  }
  if (H.y - T.y < -1) {
    if (H.x - T.x === 1) T.x++;
    if (H.x - T.x === -1) T.x--;
    T.y--;
  }
};

for (const command of input) {
  const [dir, distance] = command;

  for (let i = 0; i < Number(distance); i++) {
    switch (dir) {
      case "U":
        H.y--;
        break;

      case "D":
        H.y++;
        break;

      case "L":
        H.x--;
        break;

      case "R":
        H.x++;
        break;

      default:
        break;
    }

    checkT();

    if (!grid.includes(T)) grid.push({ ...T });
  }
}

const unique = grid.filter(
  (obj, index) =>
    grid.findIndex((item) => item.x === obj.x && item.y === obj.y) === index
);

console.log(unique.length);
