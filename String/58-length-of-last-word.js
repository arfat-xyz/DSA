/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // /\s+/ use to match one or more whitespace characters
  // this also include \t, \n, \r, \f, \v
  return s.trim().split(/\s+/).pop().length;
};
console.log(lengthOfLastWord(`   fly me   to   the moon  `));
