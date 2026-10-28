function alternateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += i % 2 === 0 ? numbers[i] : -numbers[i];
  }
  return sum;
}

const examples = [[10, 5, 6, 3], [1, 2, 3, 4, 5]];
document.getElementById("result").textContent = examples
  .map((numbers) => `alternateSum(${JSON.stringify(numbers)}) = ${alternateSum(numbers)}`)
  .join("\n");
