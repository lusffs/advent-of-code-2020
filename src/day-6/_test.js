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
  it("should return 3 + 3 + 3 + 1 + 1 = 11 when PartOne with testData is called", () => {
    assert.strictEqual(partOne(testData), 11);
  });
  // it.skip("Part two should return false when part Two is called", () => {
  //   assert.strictEqual(partTwo(), false);
  // });
});
