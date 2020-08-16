const { isPrime, isSquare } = require("../util");

const solution = require("./");

const answers = solution();
const [num] = answers;

const answer = num.join("");

describe("August 2nd, 2020", () => {
  test("one answer", () => {
    expect(Array.isArray(answers)).toBe(true);
    expect(answers.length).toBe(1);
  });

  describe(`${answer}`, () => {
    test("four different digits", () => {
      expect(num.filter((n, i) => num.indexOf(n) === i).length).toBe(4);
    });

    test("second and third total a two digit prime", () => {
      expect(isPrime(num[1] + num[2])).toBe(true);
    });

    test("exactly two digits are square", () => {
      const squares = num.map((n) => isSquare(n)).filter(Boolean);

      expect(squares.length).toBe(2);
    });

    test("the sum of the digits is a multiple of 5", () => {
      expect(num.reduce((acc, curr) => acc + curr, 0) % 5 === 0).toBe(true);
    });

    test("either the first or fourth is prime, but not both", () => {
      const firstIsPrime = isPrime(num[0]);
      const fourthIsPrime = isPrime(num[3]);

      expect(fourthIsPrime).not.toBe(firstIsPrime);
    });

    test("the second and fourth total 11", () => {
      expect(num[1] + num[3]).toBe(11);
    });
  });
});
