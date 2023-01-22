let count = 0;

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");
const grid = lines.map((line) => line.split("").map((num) => parseInt(num)));

console.log(grid);

const checkTree = (line: number, x: number) => {
  const tree = grid[line][x];

  if (
    x < 1 ||
    x === grid[line].length - 1 ||
    line < 1 ||
    line === grid.length - 1
  )
    return true;

  // console.log(tree);

  let visible = true;
  for (let i = x + 1; i < grid[line].length; i++) {
    if (tree <= grid[line][i]) visible = false;
  }
  // console.log(visible);
  if (visible) return true;

  visible = true;
  for (let i = 0; i < x; i++) {
    if (tree <= grid[line][i]) visible = false;
  }
  // console.log(visible);
  if (visible) return true;

  visible = true;
  for (let i = line + 1; i < grid.length; i++) {
    if (tree <= grid[i][x]) visible = false;
  }
  // console.log(visible);
  if (visible) return true;

  visible = true;
  for (let i = 0; i < line; i++) {
    if (tree <= grid[i][x]) visible = false;
  }
  // console.log(visible);
  if (visible) return true;

  return false;
};

for (let line = 0; line < grid.length; line++) {
  for (let x = 0; x < grid[line].length; x++) {
    if (checkTree(line, x)) count++;
  }
}

console.log(count);
