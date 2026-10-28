function removeDuplicates(items) {
  const uniqueItems = [];
  for (let i = 0; i < items.length; i++) {
    if (!uniqueItems.includes(items[i])) uniqueItems.push(items[i]);
  }
  return uniqueItems;
}

const example = [1, 2, 2, 3, 4, 4, 5];
document.getElementById("result").textContent =
  `removeDuplicates(${JSON.stringify(example)}) = ${JSON.stringify(removeDuplicates(example))}`;
