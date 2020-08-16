const { validRange, uniqueNumbers, isPrime } = require("../util");

function solution() {
  return validRange()
    .filter(uniqueNumbers)
    .filter((num) => num[0] > num[1])
    .filter((num) => num[1] > num[3])
    .filter((num) => num[3] - num[2] === 3)
    .filter((num) => isPrime(num[0] + num[2]))
    .filter((num) => num[0] - num[1] === 2);
}

module.exports = solution;
