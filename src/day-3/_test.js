const assert = require("assert");
const stepOne = require("./index").stepOne;
const stepTwo = require("./index").stepTwo;

const mockInput = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#",
];

describe("Day 3", () => {
  describe("Step 1", () => {
    it("should return 7 when right is 3 and down is 1", () => {
      assert.strictEqual(stepOne(mockInput, 3, 1), 7);
    });
  });
  describe("Step 2", () => {
    it("should return 336 stepTwo is called", () => {
      assert.strictEqual(stepTwo(mockInput), 336);
    });
  });
});
