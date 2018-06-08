/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, string, i = 0, result = "") => {
  if (n === i) return result;
  result = result + string;
  return solution (n, string, i + 1, result);
};

module.exports = {
  solution,
};
