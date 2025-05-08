/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const brutForce = (s, t) => {
    if (s.length !== t.length) {
      return false;
    }
    let firstStringWords = {},
      secondStringWords = {};
    for (let i = 0; i < s.length; i++) {
      firstStringWords[s[i]] = firstStringWords[s[i]]
        ? firstStringWords[s[i]] + 1
        : 1;
    }
    for (let i = 0; i < t.length; i++) {
      secondStringWords[t[i]] = secondStringWords[t[i]]
        ? secondStringWords[t[i]] + 1
        : 1;
    }
    const firstStringWordsToArrayWithKey = Object.keys(firstStringWords);

    if (
      Object.keys(secondStringWords).length !==
      firstStringWordsToArrayWithKey.length
    ) {
      return false;
    }
    for (let i = 0; i < firstStringWordsToArrayWithKey.length; i++) {
      if (
        firstStringWords[firstStringWordsToArrayWithKey[i]] ===
        secondStringWords[firstStringWordsToArrayWithKey[i]]
      ) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  };

  const optimal = (s, t) => {
    if (s.length !== t.length) return false;
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
      count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    for (let i = 0; i < s.length; i++) {
      if (count[i] !== 0) {
        return false;
      }
    }
    return true;
  };
  console.time(`optimal`);
  console.log(`optimal`, optimal(s, t));
  console.timeEnd(`optimal`);
  console.time(`brutForce`);
  console.log(`brutForce`, brutForce(s, t));
  console.timeEnd(`brutForce`);
};
isAnagram("rat", "car");
isAnagram("anagram", "nagaram");
