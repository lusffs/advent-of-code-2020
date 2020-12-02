const fs = require("fs");

const stepOne = (input) => {
  throw Error("Not implemented yet... 😔");
};

const stepTwo = (input) => {
  throw Error("Not implemented yet... 😔");
};

const getInput = () =>
  fs.readFileSync("./src/day-0/input.txt").toString().split("\n");

module.exports = {
  stepOne,
  stepTwo,
  executeStepOne: () => stepOne(getInput()),
  executeStepTwo: () => stepTwo(getInput()),
};
