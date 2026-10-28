function countPositiveNumbers(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) count++;
  }
  return count;
}

const example = [-1, 2, 3, -4, 5];
document.getElementById("result").textContent =
  `countPositiveNumbers(${JSON.stringify(example)}) = ${countPositiveNumbers(example)}`;
