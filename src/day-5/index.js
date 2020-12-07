const fs = require("fs");

const partOne = (inputs) => {
  let highestSeatId = 0;

  inputs.forEach((input) => {
    const test = input
      .replaceAll("B", 1)
      .replaceAll("F", 0)
      .replaceAll("R", 1)
      .replaceAll("L", 0);

    const row = parseInt(test.substr(0, 7), 2);
    const column = parseInt(test.substr(7, 3), 2);

    const seatId = row * 8 + column;
    if (seatId > highestSeatId) {
      highestSeatId = seatId;
    }
  });

  return highestSeatId;
};

const partTwo = (inputs) => {
  const ids = inputs
    .map((input) => {
      const test = input
        .replaceAll("B", 1)
        .replaceAll("F", 0)
        .replaceAll("R", 1)
        .replaceAll("L", 0);

      const row = parseInt(test.substr(0, 7), 2);
      const column = parseInt(test.substr(7, 3), 2);

      return row * 8 + column;
    })
    .sort((a, b) => a - b);

  for (let i = ids[0]; i < ids[ids.length - 1]; i++) {
    if (
      ids.indexOf(i - 1) > -1 &&
      ids.indexOf(i + 1) > -1 &&
      ids.indexOf(i) == -1
    ) {
      return i;
    }
  }
};

const getInput = () =>
  fs.readFileSync("./src/day-5/input.txt").toString().split("\n");

module.exports = {
  partOne,
  partTwo,
  executePartOne: () => partOne(getInput()),
  executePartTwo: () => partTwo(getInput()),
};
