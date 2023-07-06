function createArrayWithRange(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

console.log(createArrayWithRange(-15,2));
