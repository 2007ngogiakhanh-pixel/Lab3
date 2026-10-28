function countGreaterThan(numbers, value) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) count++;
  }
  return count;
}

const examples = [
  { numbers: [1, 5, 7, 2, 3], value: 3 },
  { numbers: [2, 3, 1, -6, 8], value: 5 },
  { numbers: [], value: 5 }
];

document.getElementById("result").textContent = examples
  .map(({ numbers, value }) =>
    `countGreaterThan(${JSON.stringify(numbers)}, ${value}) = ${countGreaterThan(numbers, value)}`
  )
  .join("\n");
