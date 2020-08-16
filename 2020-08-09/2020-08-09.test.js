const { isPrime, isSquare, sumOf } = require("../util");

const solution = require("./");

const answers = solution();
const [num] = answers;

const answer = num.join("");

describe("August 9th, 2020", () => {
  test("one answer", () => {
    expect(Array.isArray(answers)).toBe(true);
    expect(answers.length).toBe(1);
  });

  describe(answer, () => {
    test("either the second or fourth is prime, but not both", () => {
      const secondIsPrime = isPrime(num[1]);
      const fourthIsPrime = isPrime(num[3]);

      if (secondIsPrime) {
        expect(fourthIsPrime).toBe(false);
      } else {
        expect(fourthIsPrime).toBe(true);
      }

      expect(fourthIsPrime).not.toBe(secondIsPrime);
    });

    test("the sum of the digits is greater than 25", () => {
      const sum = sumOf(num);

      expect(sum).toBeGreaterThan(25);
    });

    test("the third is either two or three times the first", () => {
      const res = num[2] / 2 === num[0] || num[2] / 3 === num[0];

      expect(res).toBe(true);
    });

    test("the sum of the first and fourth is prime", () => {
      expect(isPrime(num[0] + num[3])).toBe(true);
    });

    test("exactly one digit is square", () => {
      expect(num.filter((n) => isSquare(n)).length).toBe(1);
    });
  });
});
