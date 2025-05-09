/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 * Edge Cases:
 * 1. Empty strings: s = "", t = "" => true
 * 2. Different lengths: s = "a", t = "ab" => false
 * 3. Same characters, different frequencies: s = "aabb", t = "abab" => true
 * 4. Same characters, different frequencies: s = "aabb", t = "aabbb" => false
 * 5. All same character: s = "zzzz", t = "zzzz" => true
 * 6. All letters of the alphabet: s = "abcdefghijklmnopqrstuvwxyz", t = "zyxwvutsrqponmlkjihgfedcba" => true
 * 7. Single character different: s = "abc", t = "abd" => false
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  /**
   * Brute Force Approach:
   * 1. Check if the lengths of s and t are equal. If not, return false.
   * 2. Create two frequency objects to count the occurrences of each character in s and t.
   * 3. Compare the keys and values of the two frequency objects.
   *    - If the number of keys is different, return false.
   *    - If any key has a different count in the two objects, return false.
   * 4. If all checks pass, return true.
   *
   * Time Complexity: O(n), where n is the length of the strings.
   * Space Complexity: O(n), due to the storage of frequency objects.
   *
   * @param {string} s
   * @param {string} t
   * @returns {boolean}
   */
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

  /**
   * Optimal Approach:
   * 1. Check if the lengths of s and t are equal. If not, return false.
   * 2. Create a frequency array of size 26 (for each lowercase English letter) initialized to 0.
   * 3. Iterate through each character in s and t:
   *    - Increment the count for the character in s.
   *    - Decrement the count for the character in t.
   * 4. Check if all counts in the frequency array are zero.
   *    - If any count is non-zero, return false.
   * 5. If all counts are zero, return true.
   *
   * Time Complexity: O(n), where n is the length of the strings.
   * Space Complexity: O(1), since the frequency array is of fixed size 26.
   *
   * @param {string} s
   * @param {string} t
   * @returns {boolean}
   */
  const optimal = (s, t) => {
    if (s.length !== t.length) return false;
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
      count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) {
        return false;
      }
    }
    return true;
  };

  // Logging and timing the functions for demonstration purposes
  console.time(`optimal`);
  console.log(`optimal`, optimal(s, t));
  console.timeEnd(`optimal`);
  console.time(`brutForce`);
  console.log(`brutForce`, brutForce(s, t));
  console.timeEnd(`brutForce`);
};

// Test cases
isAnagram("rat", "car"); // Output: false
isAnagram("anagram", "nagaram"); // Output: true
