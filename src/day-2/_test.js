const assert = require("assert");
const partOne = require("./index").partOne;
const partTwo = require("./index").partTwo;

const mockInput = "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc".split("\n");

describe("Day 2", () => {
  it("Part one should return 2 valid passwords from mockInput", () => {
    assert.strictEqual(partOne(mockInput), 2);
  });
  it("Part two should return 1 from mockInput", () => {
    assert.strictEqual(partTwo(mockInput), 1);
  });
});
