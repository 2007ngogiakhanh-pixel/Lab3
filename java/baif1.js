function findMax(numbers) {
  if (numbers.length === 0) return null;

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
  }
  return max;
}

const examples = [
  [1, 3, 5, 7, 9],
  [10, 20, 30, 40, 50],
  [-5, -2, -1, -3]
];

document.getElementById("result").textContent = examples
  .map((numbers) => `findMax(${JSON.stringify(numbers)}) = ${findMax(numbers)}`)
  .join("\n");
