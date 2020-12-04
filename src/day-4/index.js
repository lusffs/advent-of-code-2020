const fs = require("fs");

const parseInput = (input) => {
  let passports = [];

  input.split("\n\n").forEach((passport) => {
    const formattedPassport = passport
      .split(/\n| /)
      .map((keyValuePair) => keyValuePair.split(":"));

    passports.push(Object.fromEntries(formattedPassport));
  });

  return passports;
};

const validateRequiredFieldsOnPassport = (passport) => {
  return (
    passport.hasOwnProperty("byr") &&
    passport.hasOwnProperty("iyr") &&
    passport.hasOwnProperty("eyr") &&
    passport.hasOwnProperty("hgt") &&
    passport.hasOwnProperty("hcl") &&
    passport.hasOwnProperty("ecl") &&
    passport.hasOwnProperty("pid")
  );
};

const validationSchema = {
  // (Birth Year) - four digits; at least 1920 and at most 2002.
  byr: (value) =>
    /^[0-9]{4}$/.test(value) &&
    parseInt(value) >= 1920 &&
    parseInt(value) <= 2002,
  // (Issue Year) - four digits; at least 2010 and at most 2020.
  iyr: (value) =>
    /^[0-9]{4}$/.test(value) &&
    parseInt(value) >= 2010 &&
    parseInt(value) <= 2020,
  // (Expiration Year) - four digits; at least 2020 and at most 2030.
  eyr: (value) =>
    /^[0-9]{4}$/.test(value) &&
    parseInt(value) >= 2020 &&
    parseInt(value) <= 2030,
  // (Height) - a number followed by either cm or in:
  //   If cm, the number must be at least 150 and at most 193.
  //   If in, the number must be at least 59 and at most 76.
  hgt: (value) => {
    if (!/^([0-9]){1,}(cm|in)$/.test(value)) {
      return false;
    }

    const numberValue = parseInt(value.substring(0, value.length - 2));

    return value.indexOf("cm") > -1
      ? numberValue >= 150 && numberValue <= 193
      : numberValue >= 59 && numberValue <= 76;
  },
  // (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  hcl: (value) => /^#[0-9, a-f, A-F]{6}$/.test(value),
  // (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  ecl: (value) => /^amb|blu|brn|gry|grn|hzl|oth$/.test(value),
  // (Passport ID) - a nine-digit number, including leading zeroes.
  pid: (value) => /^[0-9]{9}$/.test(value),
};

const validate = (passport, schema) => {
  var errors = Object.keys(schema).filter((key) => {
    return !schema[key](passport[key]);
  });

  return errors.length === 0;
};

const partOne = (input) => {
  const passports = parseInput(input);
  return passports.filter((p) => {
    return validateRequiredFieldsOnPassport(p);
  }).length;
};

const partTwo = (input) => {
  const passports = parseInput(input);
  return passports.filter((p) => {
    return validate(p, validationSchema);
  }).length;
};

const getInput = () => fs.readFileSync("./src/day-4/input.txt").toString();

module.exports = {
  partOne,
  partTwo,
  executePartOne: () => partOne(getInput()),
  executePartTwo: () => partTwo(getInput()),
};
