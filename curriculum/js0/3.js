/**
 * Takes in a number, returns true if a number is greater than 5
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a) => {
  if (a>5) {
    return true;
  }
  if (a===5) {
    return false;
  }
  if (a===0) {
    return false;
  }
  if (a<0) {
    return false;
  }
};


solution(5);
module.exports = {
  solution,
};
