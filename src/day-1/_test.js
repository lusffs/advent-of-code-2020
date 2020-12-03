const assert = require("assert");
const partOne = require("./index").partOne;
const partTwo = require("./index").partTwo;

const mockInput = "1721\n979\n366\n299\n675\n1456".split("\n").map((value) => {
  return parseInt(value);
});

describe("Day 1", () => {
  it("Part one should return 514579 from mockInput", () => {
    assert.strictEqual(partOne(mockInput), 514579);
  });
  it("Part two should return 241861950 from mockInput", () => {
    assert.strictEqual(partTwo(mockInput), 241861950);
  });
});
