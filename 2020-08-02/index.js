const { validRange, twoDigitPrimes, isPrime, isSquare } = require("../util");

const sumIsMultipleOf = (n) => (num) =>
  num.reduce((acc, curr) => acc + curr, 0) % n === 0;

const hasNSquares = (n) => (num) =>
  num.map((n) => isSquare(n)).filter(Boolean).length === n;

function solution() {
  return validRange()
    .filter((num) => twoDigitPrimes.includes(num[1] + num[2]))
    .filter(hasNSquares(2))
    .filter(sumIsMultipleOf(5))
    .filter((num) => isPrime(num[0]) !== isPrime(num[3]))
    .filter((num) => num[1] + num[3] === 11);
}

module.exports = solution;
