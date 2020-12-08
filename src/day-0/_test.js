const assert = require("assert");
const partOne = require("./index").partOne;
const partTwo = require("./index").partTwo;

describe.skip("Day 0", () => {
  it("Part one should return true when part one is called", () => {
    assert.strictEqual(partOne(), true);
  });
  it("Part two should return false when part two is called", () => {
    assert.strictEqual(partTwo(), false);
  });
});
