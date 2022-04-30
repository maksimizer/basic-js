const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let allCatsArr = matrix.flat();
  let catCount = 0;
  for (let i = 0; i < allCatsArr.length; i++) {
    if (allCatsArr[i] === "^^") {
      catCount ++;
    };
  };
  return catCount;
};

module.exports = {
  countCats
};
