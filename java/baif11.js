function filterEvensAndSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) sum += numbers[i];
  }
  return sum;
}

const examples = [[1, 2, 3, 4, 5, 6], [12, 14, 15, 19, 20, 100]];
document.getElementById("result").textContent = examples
  .map((numbers) => `filterEvensAndSum(${JSON.stringify(numbers)}) = ${filterEvensAndSum(numbers)}`)
  .join("\n");
