const fs = require("fs");

const partOne = (rules, yourBag) => {
  const lookupBag = "shiny gold";

  const bagRules = rules.reduce((map, rule) => {
    const [bag, bagContent] = rule.split("contain");
    map[bag.replace("bags", "").trim()] = bagContent
      .split(",")
      .map((bag) => {
        const bagString = bag.replace(/bags|bag|\./g, "").trim();

        if (bagString === "no other") {
          return null;
        }

        return bagString;
      })
      .filter((b) => b !== null);

    return map;
  }, {});

  let bagKeysThatCanContainLookupBag = new Set([]);

  const canContainLookupBag = (bagName) => {
    const bagContents = bagRules[bagName];

    var containsLookup =
      bagContents.filter((b) => {
        return b.indexOf(lookupBag) > -1;
      }).length > 0;

    if (containsLookup) {
      bagKeysThatCanContainLookupBag.add(bagName);
      return true;
    } else {
      for (let i = 0; i < bagContents.length; i++) {
        const innerBagName = bagContents[i].split(" ").slice(1).join(" ");

        if (canContainLookupBag(innerBagName)) {
          bagKeysThatCanContainLookupBag.add(bagName);
          return true;
        }
      }
      return false;
    }
  };

  for (const [key, value] of Object.entries(bagRules)) {
    canContainLookupBag(key);
  }

  return bagKeysThatCanContainLookupBag.size;
};

const partTwo = (rules) => {
  throw Error("Not implemented yet... 😔");
};

const getInput = () =>
  fs.readFileSync("./src/day-7/input.txt").toString().split("\n");

module.exports = {
  partOne,
  partTwo,
  executePartOne: () => partOne(getInput()),
  executePartTwo: () => partTwo(getInput()),
};
