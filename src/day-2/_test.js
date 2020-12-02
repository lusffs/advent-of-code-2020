const assert = require("assert");
const stepOne = require("./index").stepOne;
const stepTwo = require("./index").stepTwo;

const mockInput = "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc".split("\n");

describe("Day 2", () => {
  describe("Step 1", () => {
    it("should return 2 valid passwords from mockInput", () => {
      assert.strictEqual(stepOne(mockInput), 2);
    });
  });
  describe("Step 2", () => {
    it.skip("should return XXX from mockInput", () => {
      assert.strictEqual(stepTwo(mockInput), 0);
    });
  });
});
