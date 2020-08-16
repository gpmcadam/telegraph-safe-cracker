const solution = require("./");

const [answer] = solution();

test("2020-08-02 answer is 1982", () => {
  expect(answer).toEqual([1, 9, 8, 2]);
});
