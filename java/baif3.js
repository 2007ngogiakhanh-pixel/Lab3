function findMin(numbers) {
  if (numbers.length === 0) return null;

  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }
  return min;
}

const example = [5, 2, 8, 1, 4];
document.getElementById("result").textContent =
  `findMin(${JSON.stringify(example)}) = ${findMin(example)}`;
