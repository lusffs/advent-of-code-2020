const assert = require("assert");
const partOne = require("./index").partOne;
const partTwo = require("./index").partTwo;

const testInput = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`
  .toString()
  .split("\n");

describe("Day 8", () => {
  it("should 5 when part one is called", () => {
    assert.strictEqual(partOne(testInput), 5);
  });
  it.skip("should return false when part two is called", () => {
    assert.strictEqual(partTwo(), false);
  });
});
