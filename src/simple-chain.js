const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' || !Number.isInteger(position) || position < 1 || position >= this.chainArr.length) {
      this.chainArr.length = 0;
      throw new Error("You can't remove incorrect link!");
    };
    this.chainArr.splice(position -1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;    
  },
  finishChain() {
    let chain = this.chainArr.join("~~");
    this.chainArr.length = 0;
    return chain;
  }
};

module.exports = {
  chainMaker
};
