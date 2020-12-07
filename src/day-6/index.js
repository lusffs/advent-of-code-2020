const fs = require("fs");

const partOne = (groups) => {
  return groups.reduce((prevGroup, group) => {
    const value = group.split("\n").reduce((previousValue, currentValue) => {
      const values = currentValue.split("");

      const lol = [
        ...previousValue,
        ...values.filter((v) => {
          return previousValue.indexOf(v) === -1;
        }),
      ];

      return lol;
    }, []);

    return prevGroup + value.length;
  }, 0);
};

const partTwo = (groups) => {
  throw Error("Not implemented yet... 😔");
};

const getInput = () =>
  fs.readFileSync("./src/day-6/input.txt").toString().split("\n\n");

module.exports = {
  partOne,
  partTwo,
  executePartOne: () => partOne(getInput()),
  executePartTwo: () => partTwo(getInput()),
};
