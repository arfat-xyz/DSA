/**
 * Determines if a given string is a palindrome after processing.
 * A palindrome reads the same forward and backward after converting all uppercase letters
 * to lowercase and removing all non-alphanumeric characters.
 *
 * Edge cases:
 * - Empty string (should return true)
 * - String with only non-alphanumeric characters (should return true after removal)
 * - Mixed case strings (should compare case-insensitively)
 * - Strings with numbers (should be included in comparison)
 * - Strings with even and odd lengths
 *
 * @param {string} s - The input string to check
 * @return {boolean} - True if the string is a palindrome, false otherwise
 */
var isPalindrome = function (s) {
  /**
   * Solution 1: Two-pass approach
   * 1. First pass: Filter and convert the string to only contain lowercase alphanumeric characters
   * 2. Second pass: Check if the filtered string is a palindrome
   *
   * @param {string} s - The input string
   * @returns {boolean} - True if palindrome, false otherwise
   */
  const solutionOne = (s) => {
    let removedNonLowerCaseString = "",
      currentCharCode;

    // First pass: filter and convert characters
    for (let i = 0; i < s.length; i++) {
      currentCharCode = s.charCodeAt(i);

      // Keep lowercase letters (a-z)
      if (currentCharCode < 123 && currentCharCode > 96) {
        removedNonLowerCaseString += s[i];
      }
      // Convert uppercase letters (A-Z) to lowercase and keep numbers (0-9)
      else if (
        (currentCharCode < 91 && currentCharCode > 64) ||
        (currentCharCode < 58 && currentCharCode > 47)
      ) {
        removedNonLowerCaseString += String.fromCharCode(currentCharCode + 32);
      }
      // Ignore all other characters (non-alphanumeric)
    }

    // Second pass: check if the filtered string is a palindrome
    let removedNonLowerCaseStringLength = removedNonLowerCaseString.length;
    for (let i = 0; i < Math.floor(removedNonLowerCaseStringLength / 2); i++) {
      if (
        removedNonLowerCaseString[i] !==
        removedNonLowerCaseString[removedNonLowerCaseStringLength - 1 - i]
      ) {
        return false;
      }
    }
    return true;
  };

  /**
   * Solution 2: Two-pointer approach (more efficient)
   * 1. Use two pointers starting at both ends of the string
   * 2. Move pointers towards each other, skipping non-alphanumeric characters
   * 3. Compare characters at pointers (case-insensitive)
   * 4. If any mismatch found, return false; otherwise return true when pointers cross
   *
   * @param {string} s - The input string
   * @returns {boolean} - True if palindrome, false otherwise
   */
  const solutionTwo = (s) => {
    // Helper function to check if a character is alphanumeric
    const isAlphanumeric = (c) =>
      (c >= "a" && c <= "z") ||
      (c >= "A" && c <= "Z") ||
      (c >= "0" && c <= "9");

    let left = 0,
      right = s.length - 1;

    while (left <= right) {
      // Skip non-alphanumeric characters from left
      if (!isAlphanumeric(s[left])) {
        left++;
        continue;
      }
      // Skip non-alphanumeric characters from right
      else if (!isAlphanumeric(s[right])) {
        right--;
        continue;
      }

      // Compare characters (case-insensitive)
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }

      // Move pointers towards center
      left++;
      right--;
    }
    return true;
  };

  // Test both solutions
  console.log(
    `Solution one`,
    `string: `,
    s,
    `. Is it palindrome: `,
    solutionOne(s)
  );
  console.log(
    `Solution Two`,
    `string: `,
    s,
    `. Is it palindrome: `,
    solutionTwo(s)
  );
  console.log(`-------------------------------\n\n`);
};

// Test cases
isPalindrome(`A man, a plan, a canal: Panama`); // true
isPalindrome(`race a car`); // false
isPalindrome(`0P`); // false (0 vs p)
isPalindrome(`a`); // true (single character)
isPalindrome("Zeus was deified, saw Suez."); // true
isPalindrome(`aa`); // true (even length)
isPalindrome(""); // true (empty string)
isPalindrome(".,"); // true (only non-alphanumeric)
