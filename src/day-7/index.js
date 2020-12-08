const fs = require("fs");

parseBagRules = (rules) => {
  return rules.reduce((map, rule) => {
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
};

const partOne = (rules) => {
  const lookupBag = "shiny gold";

  const bagRules = parseBagRules(rules);

  let bagKeysThatCanContainLookupBag = new Set([]);

  const canContainLookupBag = (bagName) => {
    if (bagKeysThatCanContainLookupBag.has(bagName)) {
      return true;
    }
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

  for (const [key] of Object.entries(bagRules)) {
    if (!bagKeysThatCanContainLookupBag.has(key)) {
      canContainLookupBag(key);
    }
  }

  return bagKeysThatCanContainLookupBag.size;
};

const partTwo = (rules) => {
  const lookupBag = "shiny gold";
  const bagRules = parseBagRules(rules);

  const openBag = (bagName, depth) => {
    const bagContents = bagRules[bagName];

    let bagsInsideThis = bagContents.reduce((a, b) => {
      return a + parseInt(b.split(" ").slice(0, 1).join(" "));
    }, 0);

    for (let i = 0; i < bagContents.length; i++) {
      const innerBagName = bagContents[i].split(" ").slice(1).join(" ");

      const numberOfBags = parseInt(
        bagContents[i].split(" ").slice(0, 1).join(" ")
      );

      bagsInsideThis += openBag(innerBagName, numberOfBags);
    }

    return bagsInsideThis * (depth || 1);
  };

  return openBag(lookupBag, 1);
};

const getInput = () =>
  fs.readFileSync("./src/day-7/input.txt").toString().split("\n");

module.exports = {
  partOne,
  partTwo,
  executePartOne: () => partOne(getInput()),
  executePartTwo: () => partTwo(getInput()),
};
