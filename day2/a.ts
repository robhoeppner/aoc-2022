const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const parsed = lines.map((line) => line.split(" "));

let score = 0;

const rules = {
  X: "A",
  Y: "B",
  Z: "C",
};

parsed.forEach((line) => {
  let [them, me] = line;

  if (me === "X") score += 1;
  if (me === "Y") score += 2;
  if (me === "Z") score += 3;

  me = rules[me as "X" | "Y" | "Z"];

  if (me === them) score += 3;
  if (them === "A" && me === "B") score += 6;
  if (them === "B" && me === "C") score += 6;
  if (them === "C" && me === "A") score += 6;
});

console.log(score);
