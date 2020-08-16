function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

function generateTwoDigitPrimes() {
  const p = [];
  for (let i = 10; i <= 99; i++) {
    if (isPrime(i)) {
      p.push(i);
    }
  }

  return p;
}

function isSquare(n) {
  const sqrt = Math.sqrt(n);

  return Math.round(sqrt) === sqrt;
}

function validRange() {
  return new Array(9999 - 1000 + 1)
    .fill(0)
    .map((_value, index) => index + 1000)
    .map(String)
    .map((str) => str.split(""))
    .map((num) => num.map(Number))
    .filter(uniqueNumbers)
    .filter((num) => num.find((n) => n === 0) === undefined)
    .filter((num) => num.find((n) => n >= 10) === undefined);
}

const twoDigitPrimes = generateTwoDigitPrimes();

const uniqueNumbers = (num) => {
  return num.filter((n, i) => num.indexOf(n) === i).length === num.length;
};

module.exports = {
  isPrime,
  generateTwoDigitPrimes,
  isSquare,
  twoDigitPrimes,
  uniqueNumbers,
  validRange,
};
