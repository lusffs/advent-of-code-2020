const assert = require("assert");
const partOne = require("./index").partOne;
const partTwo = require("./index").partTwo;

const testRules = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`
  .toString()
  .split("\n");

describe("Day 7", () => {
  it("should return 4 when part one is called is called with testRules", () => {
    assert.strictEqual(partOne(testRules), 4);
  });
  // it("Part two should return false when part two is called", () => {
  //   assert.strictEqual(partTwo(), false);
  // });
});
