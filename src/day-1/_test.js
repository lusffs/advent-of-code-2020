const assert = require("assert");
const stepOne = require("./index").stepOne;
const stepTwo = require("./index").stepTwo;

const mockInput = "1721\n979\n366\n299\n675\n1456".split("\n").map((value) => {
  return parseInt(value);
});

describe("Day 1", () => {
  describe("Step 1", () => {
    it("should return 514579 from mockInput", () => {
      assert.strictEqual(stepOne(mockInput), 514579);
    });
  });
  describe("Step 2", () => {
    it("should return 241861950 from mockInput", () => {
      assert.strictEqual(stepTwo(mockInput), 241861950);
    });
  });
});
