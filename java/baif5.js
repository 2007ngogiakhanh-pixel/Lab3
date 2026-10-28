function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const example = [1, 2, 3, 4, 5];
document.getElementById("result").textContent =
  `sumArray(${JSON.stringify(example)}) = ${sumArray(example)}`;
