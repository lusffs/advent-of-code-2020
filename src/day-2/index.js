const fs = require("fs");

const stepOne = (input) => {
  const validInputs = input.filter((item) => {
    const [policy, password] = item.split(":");
    const [limits, character] = policy.split(" ");
    const [min, max] = limits.split("-");

    return (
      password.indexOf(character) > -1 &&
      password.split("").filter((c) => {
        return c === character;
      }).length >= min &&
      password.split("").filter((c) => {
        return c === character;
      }).length <= max
    );
  });

  return validInputs.length;
};

const stepTwo = (input) => {
  throw Error("Not implemented yet... 😔");
};

const getInput = () =>
  fs.readFileSync("./src/day-2/input.txt").toString().split("\n");

module.exports = {
  stepOne,
  stepTwo,
  executeStepOne: () => stepOne(getInput()),
  executeStepTwo: () => stepTwo(getInput()),
};
