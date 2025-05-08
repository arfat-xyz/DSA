/**
 * Leetcode-style problem: Implement strStr()
 *
 * Question:
 * Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`,
 * or -1 if `needle` is not part of `haystack`.
 *
 * Examples:
 * Input: haystack = "sadbutsad", needle = "sad" => Output: 0
 * Input: haystack = "leetcode", needle = "leeto" => Output: -1
 *
 * Edge Cases:
 * 1. Empty needle ("") -> return 0
 * 2. Needle longer than haystack -> return -1
 * 3. Haystack and needle are the same -> return 0
 * 4. Needle at the end of haystack -> return correct end index
 * 5. Needle occurs multiple times -> return first index
 * 6. Needle not in haystack -> return -1
 * 7. Needle is one character -> return first index of that character
 * 8. Haystack is one character and matches needle -> return 0
 * 9. Haystack is one character and does not match needle -> return -1
 * 10. Both haystack and needle are empty -> return 0
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// Test cases (including edge cases)
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
console.log(strStr("abc", "")); // 0 (empty needle)
console.log(strStr("abc", "abcd")); // -1 (needle longer)
console.log(strStr("abc", "abc")); // 0 (exact match)
console.log(strStr("abcdef", "def")); // 3 (needle at end)
console.log(strStr("ababab", "ab")); // 0 (multiple occurrences)
console.log(strStr("abcdef", "gh")); // -1 (not in haystack)
console.log(strStr("aabba", "b")); // 2 (needle is one character)
console.log(strStr("a", "a")); // 0 (1-char match)
console.log(strStr("a", "b")); // -1 (1-char no match)
console.log(strStr("", "")); // 0 (both empty)
