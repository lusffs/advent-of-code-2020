const assert = require("assert");
const partOne = require("./index").partOne;
const partTwo = require("./index").partTwo;

const testData = `abc

a
b
c

ab
ac

a
a
a
a

b`
  .toString()
  .split("\n\n");

describe("Day 6", () => {
  it("should return 3 + 3 + 3 + 1 + 1 = 11 when partOne with testData is called", () => {
    assert.strictEqual(partOne(testData), 11);
  });
  it("should return 3 + 0 + 1 + 1 + 1 = 6 when partTwo with testData is called", () => {
    assert.strictEqual(partTwo(testData), 6);
  });
});
