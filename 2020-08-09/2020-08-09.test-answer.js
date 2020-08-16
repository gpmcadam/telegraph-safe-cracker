const solution = require("./");

const [answer] = solution();

test("2020-08-09 answer is 3798", () => {
  expect(answer).toEqual([3, 7, 9, 8]);
});
