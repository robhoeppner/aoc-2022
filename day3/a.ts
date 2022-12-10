const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const letterToNumber = (letter: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.indexOf(letter) + 1;
};

let score = 0;

for (const line of lines) {
  const p1 = line
    .slice(0, line.length / 2)
    .split("")
    .map((l) => letterToNumber(l));

  const p2 = line
    .slice(line.length / 2)
    .split("")
    .map((l) => letterToNumber(l));

  let p = 0;

  p1.forEach((el) => {
    if (p2.includes(el)) {
      p = el;
    }
  });

  score += p;
}

console.log(score);
