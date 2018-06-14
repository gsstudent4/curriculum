/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const sumDivisors = (num, i=1, sum=0) => {
  if (i === num) return sum;
  if (!(num%i)) {
    sum + = i;
  }
  return sumDivisors (num, i + 1, sum)
};

module.exports = {
  solution,
};
