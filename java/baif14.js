function findMissingNumber(numbers, n) {
  let expectedSum = 0;
  let actualSum = 0;
  for (let i = 1; i <= n; i++) {
    expectedSum += i;
  }
  for (let i = 0; i < numbers.length; i++) {
    actualSum += numbers[i];
  }
  return expectedSum - actualSum;
}

const examples = [
  { numbers: [1, 2, 4, 5, 6], n: 6 },
  { numbers: [3, 7, 1, 2, 8, 4, 5], n: 8 },
  { numbers: [1, 2, 3, 4], n: 4 }
];
document.getElementById("result").textContent = examples
  .map(({ numbers, n }) =>
    `findMissingNumber(${JSON.stringify(numbers)}, ${n}) = ${findMissingNumber(numbers, n)}`
  )
  .join("\n");
