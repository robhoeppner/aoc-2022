const H = { x: 0, y: 0 };
const T = { x: 0, y: 0 };

const input = (await Deno.readTextFile("./input.txt"))
  .split("\n")
  .map((line) => line.split(" "));

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

    if (T.x - H.x > 1) {
      T.x;
    }
    if (T.x - H.x > 1 || T.y - H.y > 1) {
      console.log("test");
    }
  }
}
