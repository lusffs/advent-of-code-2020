const assert = require("assert");
const partOne = require("./index").partOne;
const partTwo = require("./index").partTwo;

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
  it("Part one should return 7 when right is 3 and down is 1", () => {
    assert.strictEqual(partOne(mockInput, 3, 1), 7);
  });
  it("Part two should return 336 when partTwo is called", () => {
    assert.strictEqual(partTwo(mockInput), 336);
  });
});
