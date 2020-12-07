const fs = require("fs");

const partOne = (groups) =>
  groups.reduce(
    (prevGroup, group) =>
      prevGroup +
      group
        .split("\n")
        .reduce(
          (previousValue, currentValue) => [
            ...previousValue,
            ...currentValue
              .split("")
              .filter((v) => previousValue.indexOf(v) === -1),
          ],
          []
        ).length,
    0
  );

const partTwo = (groups) =>
  groups.reduce((prevGroup, group) => {
    const flatGroup = group
      .split("\n")
      .reduce(
        (previousValue, currentValue) => [
          ...previousValue,
          ...currentValue.split(""),
        ],
        []
      );

    let count = 0;
    const uniqueSet = [...new Set(flatGroup)];

    for (let i = 0; i < uniqueSet.length; i++) {
      const unique = uniqueSet[i];
      if (
        flatGroup.filter((c) => unique === c).length ===
        group.split("\n").length
      ) {
        count++;
      }
    }

    return prevGroup + count;
  }, 0);

const getInput = () =>
  fs.readFileSync("./src/day-6/input.txt").toString().split("\n\n");

module.exports = {
  partOne,
  partTwo,
  executePartOne: () => partOne(getInput()),
  executePartTwo: () => partTwo(getInput()),
};
