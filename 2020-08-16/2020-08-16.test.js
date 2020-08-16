const { isPrime } = require("../util");

const solution = require("./");

const answers = solution();
const [num] = answers;

const answer = num.join("");

describe(`August 16th, 2020`, () => {
  test("one answer", () => {
    expect(Array.isArray(answers)).toBe(true);
    expect(answers.length).toBe(1);
  });

  describe(`${answer}`, () => {
    test("four different digits", () => {
      expect(num.filter((n, i) => num.indexOf(n) === i).length).toBe(4);
    });

    test("the first is greater than the second", () => {
      expect(num[0]).toBeGreaterThan(num[1]);
    });

    test("the second is greater than the fourth", () => {
      expect(num[1]).toBeGreaterThan(num[3]);
    });

    test("the first and third sum to a prime", () => {
      expect(isPrime(num[0] + num[2])).toBe(true);
    });

    test("the fourth is three greater than the third", () => {
      expect(num[3] - num[2]).toBe(3);
    });

    test("the first and second differ by two", () => {
      expect(num[0] - num[1]).toBe(2);
    });
  });
});
