const expect = require("chai").expect;
const { add } = require("../src");

describe("unit-test", () => {
  describe("#add", () => {
    it("should return sum when param are numbers", () => {
      expect(add(0, 1)).to.equal(1);
      expect(add(0, 2)).to.equal(2);
    });
    it("should return NaN when param is invalid", () => {
      expect(isNaN(add(0, undefined))).to.equal(true);
      expect(isNaN(add(null, undefined))).to.equal(true);
      expect(isNaN(add(0, 10))).to.equal(false);
    });
  });
});
