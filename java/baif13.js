function calculateGrade(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  const average = scores.length === 0 ? 0 : sum / scores.length;

  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}

const examples = [[95, 85, 90], [80, 79, 81], [50, 60]];
document.getElementById("result").textContent = examples
  .map((scores) => `calculateGrade(${JSON.stringify(scores)}) = ${calculateGrade(scores)}`)
  .join("\n");
