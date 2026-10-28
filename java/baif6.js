function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

const example = [10, 20, 30, 40, 50];
document.getElementById("result").textContent =
  `calculateAverage(${JSON.stringify(example)}) = ${calculateAverage(example)}`;
