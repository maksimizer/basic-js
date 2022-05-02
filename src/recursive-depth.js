const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depthCounter = arr.reduce((a, b) => {
      let depth = Array.isArray(b) ? this.calculateDepth(b) : 0;
      return depth > a ? depth : a;
    }, 0);
    return depthCounter + 1;
  };
}

module.exports = {
  DepthCalculator
};
