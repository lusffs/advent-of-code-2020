const assert = require("assert");
const partOne = require("./index").partOne;

const partOneTestInput = describe("Day 5", () => {
  it("Part one should return 567 for BFFFBBFRRR (row 70, column 7, seat ID 567)", () => {
    assert.strictEqual(partOne(["BFFFBBFRRR"]), 567);
  });
  it("Part one should return 119 for FFFBBBFRRR (row 14, column 7, seat ID 119)", () => {
    assert.strictEqual(partOne(["FFFBBBFRRR"]), 119);
  });
  it("Part one should return 820 for BBFFBBFRLL (row 102, column 4, seat ID 820)", () => {
    assert.strictEqual(partOne(["BBFFBBFRLL"]), 820);
  });
  it("Part one should return 820 for multiple inputs", () => {
    assert.strictEqual(
      partOne(["FFFBBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"]),
      820
    );
  });
});
