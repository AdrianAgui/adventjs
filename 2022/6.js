function createCube(size) {
  const sizeArray = Array.from(Array(size).keys());

  const ups = sizeArray.map((elem) => {
    const numLine = elem + 1;
    const spaces = ' '.repeat(size - numLine);
    return spaces + '/\\'.repeat(numLine) + '_\\'.repeat(size);
  });

  const downs = sizeArray.map((index) => {
    const spaces = ' '.repeat(index);
    return spaces + '\\/'.repeat(size - index) + '_/'.repeat(size);
  });

  const stringUp = ups.toString().replaceAll(',', '\n') + '\n';
  const stringDown = downs.toString().replaceAll(',', '\n');

  return stringUp + stringDown;
}
