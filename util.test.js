const { validRange } = require("./util");

describe("validRange", () => {
  test("returns a valid range of 4 digit unique numbers between 1-9", () => {
    const range = validRange();

    // all above 0
    expect(
      range.filter((num) => num.find((n) => n === 0 || n >= 10) !== undefined)
        .length
    ).toBe(0);
  });
});
