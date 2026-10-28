function sumOddNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) sum += numbers[i];
  }
  return sum;
}

const example = [1, 2, 3, 4, 5];
document.getElementById("result").textContent =
  `sumOddNumbers(${JSON.stringify(example)}) = ${sumOddNumbers(example)}`;
