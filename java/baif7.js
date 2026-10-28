function isAscending(numbers) {
  if (numbers.length < 2) return false;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] <= numbers[i - 1]) return false;
  }
  return true;
}

const examples = [[1, 2, 3, 5], [1, 1, 2], [7], []];
document.getElementById("result").textContent = examples
  .map((numbers) => `isAscending(${JSON.stringify(numbers)}) = ${isAscending(numbers)}`)
  .join("\n");
