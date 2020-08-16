const { validRange, isPrime, sumOf, isSquare } = require("../util");

function solution() {
  return validRange()
    .filter((num) => num[2] / 2 === num[0] || num[2] / 3 === num[0])
    .filter(
      (num) =>
        (isPrime(num[1]) || isPrime(num[3])) &&
        isPrime(num[1]) !== isPrime(num[3])
    )
    .filter((num) => sumOf(num) > 25)
    .filter((num) => isPrime(num[0] + num[3]))
    .filter((num) => num.filter((n) => isSquare(n)).length === 1);
}

module.exports = solution;
