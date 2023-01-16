const input = await Deno.readTextFile("./input.txt");

const [topHalf, moves] = input.split("\n\n");

let stacks: any[] = [];

topHalf
  .split("\n")
  .reverse()
  .slice(1)
  .map((el) => {
    const row = [];
    for (let i = 0; i < el.length; i += 4) {
      row.push(el.substring(i, i + 3));
    }

    return row;
  })
  .forEach((el) => {
    for (let i = 0; i < 9; i++) {
      const crate = el[i]
        .replaceAll(" ", "")
        .replaceAll("[", "")
        .replaceAll("]", "");

      if (!stacks[i]) stacks[i] = "";
      stacks[i] += crate;
    }
  });

stacks = stacks.map((el) => el.split(""));

moves.split("\n").forEach((el) => {
  const data = el.split(" ");

  const amount = +data[1];
  const from = +data[3] - 1;
  const to = +data[5] - 1;

  for (let i = 0; i < amount; i++) {
    const crate = stacks[from].pop();
    stacks[to].push(crate);
  }
});

let solution = "";
stacks.forEach((el) => {
  solution += el.at(-1);
});

console.log(solution);
