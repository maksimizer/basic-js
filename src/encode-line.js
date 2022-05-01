const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedLine = '';
  let repeatCount = 1; 
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if (repeatCount === 1) {
        encodedLine = encodedLine + `${str[i]}`;
      } else {
        encodedLine = encodedLine + `${repeatCount}` + `${str[i]}`;
      };
      repeatCount = 1;
    };
    if (str[i] === str[i + 1]) {
      repeatCount++;
    };
  };
  return encodedLine;
}

module.exports = {
  encodeLine
};
