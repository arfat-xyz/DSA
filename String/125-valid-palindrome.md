# Palindrome Checker Documentation

## Overview

This JavaScript function checks if a given string is a palindrome after processing. A palindrome reads the same forward and backward after converting all uppercase letters to lowercase and removing all non-alphanumeric characters.

## Function Signature

```javascript
/**
 * @param {string} s - The input string to check
 * @return {boolean} - True if the string is a palindrome, false otherwise
 */
var isPalindrome = function(s)
```

## Solutions Implemented

### Solution 1: Two-pass Approach

**Algorithm:**

1. First pass: Filter and convert the string to only contain lowercase alphanumeric characters
2. Second pass: Check if the filtered string is a palindrome

**Workflow:**

- Iterate through the string to build a new string containing only alphanumeric characters in lowercase
- Check the new string by comparing characters from both ends moving towards the center

**Edge Cases Handled:**

- Empty strings
- Strings with only non-alphanumeric characters
- Mixed case strings
- Strings containing numbers

### Solution 2: Two-pointer Approach

**Algorithm:**

1. Use two pointers starting at both ends of the string
2. Move pointers towards each other, skipping non-alphanumeric characters
3. Compare characters at pointers (case-insensitive)
4. Return false if any mismatch found, true when pointers cross

**Workflow:**

- Initialize left and right pointers
- Skip non-alphanumeric characters by moving pointers inward
- Compare valid characters case-insensitively
- Return result based on comparisons

**Advantages:**

- More space efficient (O(1) space)
- Only requires one pass through the string in most cases

## Test Cases

The function includes comprehensive test cases covering:

- Standard palindromes with punctuation (`"A man, a plan, a canal: Panama"`)
- Non-palindromes (`"race a car"`)
- Edge cases with numbers (`"0P"`)
- Single character strings (`"a"`)
- Complex palindromes (`"Zeus was deified, saw Suez."`)
- Even length palindromes (`"aa"`)
- Empty strings (`""`)
- Non-alphanumeric only strings (`".,"`)

## Performance Comparison

| Version    | Time Complexity | Space Complexity | Speed    | Readability | Recommended Use                     |
| ---------- | --------------- | ---------------- | -------- | ----------- | ----------------------------------- |
| Solution 1 | O(n)            | O(n)             | Moderate | High        | When code clarity is prioritized    |
| Solution 2 | O(n)            | O(1)             | Fast     | Moderate    | When memory efficiency is important |

**Key Differences:**

1. **Space Complexity**: Solution 1 creates a new string (O(n) space) while Solution 2 works in-place (O(1) space
2. **Practical Speed**: Solution 2 is generally faster as it avoids creating a new string
3. **Readability**: Solution 1 is slightly more readable due to its straightforward two-step approach
4. **Recommendation**: Solution 2 is preferred for production code due to its better space efficiency, while Solution 1 might be better for teaching/learning purposes

## Usage Recommendations

- For most production environments: Use Solution 2 (two-pointer approach)
- For educational purposes: Both solutions demonstrate valuable techniques
- For memory-constrained environments: Definitely use Solution 2
- When working with very large strings: Solution 2 is significantly more efficient

The implementation includes console logging for both solutions to facilitate comparison during development and testing.
