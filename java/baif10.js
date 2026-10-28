function sumOfSquares(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

const examples = [[1, 2, 3], [4, 5, 6]];
document.getElementById("result").textContent = examples
  .map((numbers) => `sumOfSquares(${JSON.stringify(numbers)}) = ${sumOfSquares(numbers)}`)
  .join("\n");
