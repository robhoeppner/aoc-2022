const input = (await Deno.readTextFile("./input.txt")).split("\n\n");

const monkeys = input.map((block) => {
  const lines = block.split("\n");

  const items = lines[1].replace("Starting items:", "").replaceAll(" ", "");
  const cmd = lines[2].replace("Operation: new = old", "").replaceAll(" ", "");
  const test = lines[3].replace("Test: divisible by", "").replaceAll(" ", "");

  const monkey = {
    items: items.split(",").map((item) => parseInt(item)),
    cmd,
    test: {
      cond: parseInt(test),
      true: parseInt(lines[4].slice(-1)),
      false: parseInt(lines[5].slice(-1)),
    },
    inspections: 0,
  };

  return monkey;
});

const rounds = 10000;

const globalMod = monkeys.reduce((a, b) => a * b.test.cond, 1);

for (let round = 0; round < rounds; round++) {
  monkeys.forEach((monkey) => {
    const op = monkey.cmd.charAt(0);
    const cmd = monkey.cmd.slice(1);

    while (monkey.items.length > 0) {
      monkey.inspections++;
      const item = monkey.items.shift()!;

      const value = cmd === "old" ? item : parseInt(cmd);

      let newValue = 0;

      if (op === "+") {
        newValue = item + value;
      } else if (op === "*") {
        newValue = item * value;
      }

      newValue = newValue % globalMod;

      const check = newValue! % monkey.test.cond === 0;
      const newMonkey = monkey.test[`${check}`];

      monkeys[newMonkey].items.push(newValue!);
    }
  });
}

const result = monkeys
  .map((monkey) => monkey.inspections)
  .sort((a, b) => a - b)
  .slice(-2)
  .reduce((a, b) => a * b);

console.log(result);
