/**
 * Reverses a string represented as an array of characters in-place with O(1) extra memory.
 * @param {character[]} s - The input array of characters to be reversed.
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  /**
   * First Approach: Two-pointer technique
   * - Initialize two pointers, one at the start (left) and one at the end (right) of the array.
   * - Swap the characters at these pointers.
   * - Move the left pointer forward and the right pointer backward.
   * - Repeat until the pointers meet or cross each other.
   * @param {character[]} s - The input array of characters.
   * @returns {void} Modifies the array in-place.
   */
  const firstApproach = (s) => {
    const halfLength = Math.floor(s.length / 2);
    let replaceLastIndex = s.length - 1,
      temp = "";
    for (i = 0; i < halfLength; i++) {
      temp = s[i];
      s[i] = s[replaceLastIndex];
      s[replaceLastIndex] = temp;
      replaceLastIndex--;
    }
    return s;
  };

  /**
   * Second Approach: Using built-in reverse method
   * - Utilizes JavaScript's built-in array reverse method.
   * - Simple and concise but may not be acceptable in interviews where in-place modification is required.
   * @param {character[]} s - The input array of characters.
   * @returns {void} Modifies the array in-place.
   */
  const secondApproach = (s) => s.reverse();

  // Logging the results of both approaches for demonstration purposes
  console.log(`First approach`, firstApproach(s));
  console.log(`Second approach`, secondApproach(s));
};

// Edge Cases:
// 1. Empty array (though constraints say length >= 1)
// 2. Single character array (e.g., ['a'])
// 3. Even length array (e.g., ['a', 'b', 'c', 'd'])
// 4. Odd length array (e.g., ['a', 'b', 'c'])
// 5. All identical characters (e.g., ['a', 'a', 'a'])
// 6. Printable ASCII characters (e.g., ['!', '2', 'A', 'b'])

// Example usage:
reverseString(["h", "e", "l", "l", "o"]);
