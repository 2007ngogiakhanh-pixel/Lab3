function findPairsWithSum(numbers, targetSum) {
  const pairs = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        pairs.push([numbers[i], numbers[j]]);
      }
    }
  }
  return pairs;
}

const example = [1, 2, 3, 4, 5];
document.getElementById("result").textContent =
  `findPairsWithSum(${JSON.stringify(example)}, 5) = ${JSON.stringify(findPairsWithSum(example, 5))}`;
