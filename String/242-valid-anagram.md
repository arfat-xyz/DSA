# Anagram Checker Documentation

This document provides an analysis of two approaches to solve the anagram checking problem in JavaScript.

## Problem Description

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Approaches

### 1. Brute Force Approach

**Description**:

- Compares character frequencies between two strings using hash maps
- First checks if lengths are equal
- Creates frequency counters for both strings
- Compares the frequency counters

**Complexity**:

- Time: O(n) - Requires two passes through the strings and one pass through the unique characters
- Space: O(n) - Stores frequency counters for both strings

### 2. Optimal Approach

**Description**:

- Uses a fixed-size array (26 elements) for lowercase English letters
- Increments counts for characters in `s` and decrements for characters in `t`
- Checks if all counts return to zero

**Complexity**:

- Time: O(n) - Requires one pass through both strings and one pass through the 26-element array
- Space: O(1) - Uses a fixed-size array regardless of input size

## Comparison Table

| Approach    | Time Complexity | Space Complexity | Speed (Relative) | Readability | Recommended Use Case                                         |
| ----------- | --------------- | ---------------- | ---------------- | ----------- | ------------------------------------------------------------ |
| Brute Force | O(n)            | O(n)             | Slower           | Moderate    | When memory is not a concern and code clarity is prioritized |
| Optimal     | O(n)            | O(1)             | Faster           | High        | Production code where performance matters                    |

## Key Observations:

1. **Speed**: The optimal approach is generally faster due to:

   - Fixed-size array operations
   - No hash map overhead
   - Single pass comparison at the end

2. **Readability**: Both approaches are fairly readable, but the optimal approach has a slight edge due to its simplicity and fixed-size data structure.

3. **Memory Usage**: The optimal approach wins significantly in space efficiency (O(1) vs O(n)).

4. **Recommended Use**:
   - For most production scenarios, the optimal approach is recommended
   - The brute force approach might be preferred for educational purposes or when explaining the concept clearly

## Edge Cases Handled:

Both approaches handle all specified edge cases correctly:

- Empty strings
- Different lengths
- Same characters with different frequencies
- All same characters
- Full alphabet cases
- Single character differences
