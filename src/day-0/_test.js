const assert = require("assert");
const Step1 = require("./index").Step1;
const Step2 = require("./index").Step2;

describe.skip("Day 0", () => {
  describe("Step 1", () => {
    it("should return true when Step1 is called", () => {
      assert.strictEqual(Step1(), true);
    });
  });
  describe("Step 2", () => {
    it("should return false when Step2 is called", () => {
      assert.strictEqual(Step2(), false);
    });
  });
});
