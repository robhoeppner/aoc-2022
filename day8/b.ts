let high = 0;

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");
const grid = lines.map((line) => line.split("").map((num) => parseInt(num)));

const checkTree = (line: number, x: number) => {
  const tree = grid[line][x];

  if (
    x < 1 ||
    x === grid[line].length - 1 ||
    line < 1 ||
    line === grid.length - 1
  )
    return;

  let x1 = 0;
  for (let i = x + 1; i < grid[line].length; i++) {
    if (grid[line][i] >= tree) {
      x1++;
      break;
    } else {
      x1++;
    }
  }

  let x2 = 0;

  for (let i = x - 1; i >= 0; i--) {
    if (grid[line][i] >= tree) {
      x2++;
      break;
    } else {
      x2++;
    }
  }

  let y1 = 0;
  for (let i = line + 1; i < grid.length; i++) {
    if (grid[i][x] >= tree) {
      y1++;
      break;
    } else {
      y1++;
    }
  }

  let y2 = 0;
  for (let i = line - 1; i >= 0; i--) {
    if (grid[i][x] >= tree) {
      y2++;
      break;
    } else {
      y2++;
    }
  }

  const score = x1 * x2 * y1 * y2;

  if (score > high) high = score;
};

for (let line = 0; line < grid.length; line++) {
  for (let x = 0; x < grid[line].length; x++) {
    checkTree(line, x);
  }
}

console.log(high);
