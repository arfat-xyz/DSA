/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const minLenth = Math.min(...strs.map((s) => s.length));
  let prefix = "";
  for (let i = 0; i < minLenth; i++) {
    const firstStringLetter = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (firstStringLetter !== strs[j][i]) {
        return prefix;
      }
    }
    prefix = prefix + firstStringLetter;
  }
  return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
