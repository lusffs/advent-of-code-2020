const assert = require("assert");
const stepOne = require("./index").stepOne;
const stepTwo = require("./index").stepTwo;

describe.skip("Day 0", () => {
  describe("Step 1", () => {
    it("should return true when StepOne is called", () => {
      assert.strictEqual(stepOne(), true);
    });
  });
  describe("Step 2", () => {
    it("should return false when StepOne is called", () => {
      assert.strictEqual(stepTwo(), false);
    });
  });
});
