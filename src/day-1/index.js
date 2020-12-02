const fs = require("fs");

const stepOne = (input) => {
  const targetValue = 2020;
  return input
    .filter((value, _, array) => {
      return value + array[array.indexOf(targetValue - value)] === targetValue;
    })
    .reduce((a, b) => a * b);
};

const stepTwo = (input) => {
  throw Error("Not implemented yet.. 😔");
};

const getInput = () =>
  fs
    .readFileSync("./src/day-1/input.txt")
    .toString()
    .split("\n")
    .map((value) => {
      return parseInt(value);
    });

const executeStepOne = () => stepOne(getInput());

const executeStepTwo = () => stepTwo(getInput);

module.exports = {
  stepOne,
  stepTwo,
  executeStepOne,
  executeStepTwo,
};
