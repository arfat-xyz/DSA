# Documentation for Merging Strings Alternately

## Problem Description

Given two strings `word1` and `word2`, merge them by adding letters in alternating order, starting with `word1`. If one string is longer than the other, append the remaining letters of the longer string to the end of the merged string.

## Solution Approaches

### Solution One

1. **Initialization**: Determine the minimum length of the two strings to know how many characters to alternate.
2. **Loop through indices up to the minimum length**: For each index, append characters from both strings to the result string.
3. **Append remaining characters**: After the loop, append any remaining characters from the longer string to the result.

### Solution Two

1. **Initialization**: Start with an empty result string and an index initialized to 0.
2. **Loop while either string has characters left**: For each iteration, check if the current index is within the bounds of each string and append the corresponding characters to the result.
3. **Increment index**: Move to the next index after processing both strings at the current index.

## Solution Code

```javascript
/**
 * Merges two strings by adding letters in alternating order, starting with word1.
 * If a string is longer than the other, the remaining letters are appended to the end.
 *
 * @param {string} word1 - The first string to merge.
 * @param {string} word2 - The second string to merge.
 * @return {string} - The merged string.
 */
var mergeAlternately = function (word1, word2) {
  /**
   * Solution One:
   * - Alternates characters up to the length of the shorter string.
   * - Appends the remaining characters from the longer string.
   *
   * @param {string} word1 - The first string to merge.
   * @param {string} word2 - The second string to merge.
   * @returns {string} - The merged string.
   */
  const solutionOne = (word1, word2) => {
    const minLength = Math.min(word1.length, word2.length);
    let mergedString = "";
    for (let i = 0; i < minLength; i++) {
      mergedString += word1[i] + word2[i];
    }
    if (word1.length > minLength) {
      mergedString += word1.slice(minLength);
    }
    if (word2.length > minLength) {
      mergedString += word2.slice(minLength);
    }
    return mergedString;
  };

  /**
   * Solution Two:
   * - Uses a while loop to iterate until both strings are exhausted.
   * - Checks bounds for each string at each index to append characters.
   *
   * @param {string} word1 - The first string to merge.
   * @param {string} word2 - The second string to merge.
   * @returns {string} - The merged string.
   */
  const solutionTwo = (word1, word2) => {
    let mergedString = "";
    let i = 0;
    while (i < word1.length || i < word2.length) {
      if (i < word1.length) {
        mergedString += word1[i];
      }
      if (i < word2.length) {
        mergedString += word2[i];
      }
      i++;
    }
    return mergedString;
  };

  console.time(`solutionOne`);
  console.log(`Solution One: `, solutionOne(word1, word2));
  console.timeEnd(`solutionOne`);
  console.time(`solutionTwo`);
  console.log(`Solution Two: `, solutionTwo(word1, word2));
  console.timeEnd(`solutionTwo`);
  console.log(`--------------------`);
};

// Test cases
mergeAlternately(`abc`, `pqr`);
mergeAlternately(`ab`, `pqrs`);
mergeAlternately(`abcd`, `pq`);
```

## Performance Comparison

| Version      | Time Complexity | Space Complexity | Speed           | Readability | Recommended Use   |
| ------------ | --------------- | ---------------- | --------------- | ----------- | ----------------- |
| Solution One | O(n)            | O(n)             | Faster          | High        | General Use       |
| Solution Two | O(n)            | O(n)             | Slightly Slower | Very High   | Readability Focus |

### Explanation of the Table

- **Time Complexity**: Both solutions have a linear time complexity, O(n), where n is the length of the longer string.
- **Space Complexity**: Both solutions require O(n) space to store the merged string.
- **Speed**: Solution One is generally faster due to fewer conditional checks inside the loop.
- **Readability**: Solution Two is more readable as it uses a straightforward while loop with clear bounds checking.
- **Recommended Use**: Solution One is recommended for general use due to its speed, while Solution Two is better when readability is a priority.
