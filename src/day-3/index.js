const fs = require("fs");

const partOne = (rows, right, down) => {
  let sidePostion = right;
  let numberOfTrees = 0;

  for (let y = down; y < rows.length; y = y + down) {
    const row = rows[y];

    if (row[sidePostion % row.length] === "#") {
      numberOfTrees++;
    }

    sidePostion += right;
  }

  return numberOfTrees;
};

const partTwo = (input) => {
  const trajectories = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ];

  let trees = 1;

  trajectories.forEach((trajectory) => {
    const numberOfTrees = partOne(input, trajectory.right, trajectory.down);
    trees = trees * (numberOfTrees !== 0 ? numberOfTrees : 1);
  });

  return trees;
};

const getInput = () =>
  fs.readFileSync("./src/day-3/input.txt").toString().split("\n");

module.exports = {
  partOne,
  partTwo,
  executePartOne: () => partOne(getInput(), 3, 1),
  executePartTwo: () => partTwo(getInput()),
};
