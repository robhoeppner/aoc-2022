const input = await Deno.readTextFile("./input.txt");

const chars = input.split("");

let index = -1;

for (let i = 0; i < chars.length; i++) {
  const seq = chars.slice(i, i + 4);
  let repeat = false;

  seq.forEach((char, i) => {
    if (seq.lastIndexOf(char) !== i) repeat = true;
  });

  if (!repeat && index < 0) index = i;
}

console.log(index + 4);
