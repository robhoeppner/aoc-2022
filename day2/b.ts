const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const parsed = lines.map((line) => line.split(" "));

const points = parsed.map((line) => {
  const [them, result] = line;

  let p = 0;

  if (result === "X") p += 0;
  if (result === "Y") p += 3;
  if (result === "Z") p += 6;

  let more = ["A", "B", "C"].findIndex((t) => t === them) + 1;

  if (result === "X") more -= 1;
  if (result === "Z") more += 1;

  more = more % 3;
  p += more === 0 ? 3 : more;
  return p;
});

console.log(points.reduce((a, b) => a + b));
