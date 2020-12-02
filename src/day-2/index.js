const fs = require("fs");

const stepOne = (input) => {
  const validInputs = input.filter((item) => {
    const [policy, password] = item.split(":");
    const [limits, character] = policy.split(" ");
    const [min, max] = limits.split("-");
    const passwordArray = password.split("");

    return (
      password.indexOf(character) > -1 &&
      passwordArray.filter((c) => {
        return c === character;
      }).length >= min &&
      passwordArray.filter((c) => {
        return c === character;
      }).length <= max
    );
  });

  return validInputs.length;
};

const stepTwo = (input) => {
  const validInputs = input.filter((item) => {
    const [policy, password] = item.split(":");
    const [limits, character] = policy.split(" ");
    const [positionOne, positionTwo] = limits.split("-");
    const passwordArray = password.split("");

    return (
      passwordArray[positionOne] !== passwordArray[positionTwo] &&
      (passwordArray[positionOne] === character ||
        passwordArray[positionTwo] === character)
    );
  });

  return validInputs.length;
};

const getInput = () =>
  fs.readFileSync("./src/day-2/input.txt").toString().split("\n");

module.exports = {
  stepOne,
  stepTwo,
  executeStepOne: () => stepOne(getInput()),
  executeStepTwo: () => stepTwo(getInput()),
};
