const solution = require("./");

const [answer] = solution();

test("2020-08-16 answer is 9752", () => {
  expect(answer).toEqual([9, 7, 2, 5]);
});
