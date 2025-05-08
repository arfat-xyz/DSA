# Maximum Consecutive Ones Algorithm Documentation

## Overview

This algorithm finds the maximum number of consecutive 1's in a binary array. It efficiently tracks streaks of consecutive 1's while iterating through the array.

## Function Signature

```javascript
/**
 * Finds the maximum number of consecutive 1's in a binary array.
 * @param {number[]} nums - The binary array.
 * @returns {number} The maximum number of consecutive 1's.
 */
var findMaxConsecutiveOnes = function (nums) {
  // Implementation
};
```

## Algorithm Explanation

The algorithm uses two counters:

1. **max**: Tracks the maximum consecutive 1's found so far
2. **curr**: Counts the current streak of consecutive 1's

For each element:

- If the element is 1:
  - Increment `curr`
  - Update `max` if `curr` exceeds it
- If the element is 0:
  - Reset `curr` to 0

## Edge Cases

- **All 1's**: Returns array length
- **All 0's**: Returns 0
- **Single element arrays**: Returns 1 or 0 appropriately
- **Empty array**: Returns 0
- **Alternating 1's and 0's**: Returns 1
- **Longest streak at beginning/end**: Correctly identifies longest streak

## Example Usage

```javascript
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2
```

## Performance Analysis

| Metric           | Value        | Description                                       |
| ---------------- | ------------ | ------------------------------------------------- |
| Time Complexity  | O(n)         | Linear time as we traverse the array exactly once |
| Space Complexity | O(1)         | Constant space using only two counters            |
| Speed            | Fast         | Optimal solution with minimal operations          |
| Readability      | High         | Clear variable names and straightforward logic    |
| Recommended Use  | General case | Works efficiently for all binary array sizes      |

## Alternative Approaches

1. **Split/Join Method**:

   ```javascript
   return Math.max(
     ...nums
       .join("")
       .split("0")
       .map((s) => s.length),
     0
   );
   ```

   - Less efficient due to string operations
   - More concise but harder to read

2. **Reduce Method**:
   ```javascript
   return nums.reduce(
     ([max, curr], num) =>
       num === 1 ? [Math.max(max, curr + 1), curr + 1] : [max, 0],
     [0, 0]
   )[0];
   ```
   - Functional approach
   - Less readable for most developers

## Testing Coverage

The provided edge cases cover:

- Normal cases with mixed 1's and 0's
- All 1's and all 0's cases
- Single-element cases
- Empty array case
- Different streak positions (beginning, middle, end)
- Alternating patterns

## Conclusion

The implemented solution provides optimal performance with O(n) time and O(1) space complexity. Its simplicity makes it easy to understand while efficiently solving the problem. The solution handles all edge cases appropriately and is recommended for general use with binary arrays.
