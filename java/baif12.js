function findLongestWord(words) {
  if (words.length === 0) return "";

  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) longestWord = words[i];
  }
  return longestWord;
}

const examples = [
  ["apple", "banana", "cherry", "date"],
  ["hello", "world", "this", "is", "great"]
];
document.getElementById("result").textContent = examples
  .map((words) => `findLongestWord(${JSON.stringify(words)}) = ${JSON.stringify(findLongestWord(words))}`)
  .join("\n");
