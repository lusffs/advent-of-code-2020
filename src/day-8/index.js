const fs = require("fs");

const partOne = (instructions) => {
  let pointer = 0;
  let accumulator = 0;
  let visitedPointers = [];

  while (visitedPointers.indexOf(pointer) === -1) {
    visitedPointers.push(pointer);
    const [command, argument] = instructions[pointer].split(" ");
    switch (command) {
      case "jmp":
        pointer += +argument;
        break;
      case "acc":
        accumulator += +argument;
      case "nop":
        pointer++;
        break;
    }
  }

  return accumulator;
};

const partTwo = (instructions) => {
  throw Error("Not implemented yet... 😔");
};

const getInput = () =>
  fs.readFileSync("./src/day-8/input.txt").toString().split("\n");

module.exports = {
  partOne,
  partTwo,
  executePartOne: () => partOne(getInput()),
  executePartTwo: () => partTwo(getInput()),
};
