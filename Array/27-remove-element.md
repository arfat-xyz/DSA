# Remove Element Algorithm Documentation

## Overview

This algorithm removes all occurrences of a specified value from an array in-place and returns the count of elements that are not equal to the specified value. The order of the remaining elements may be changed.

## Function Signature

```javascript
/**
 * Removes all occurrences of `val` from `nums` in-place and returns the count of elements not equal to `val`.
 * @param {number[]} nums - The input array.
 * @param {number} val - The value to remove from the array.
 * @return {number} - The count of elements not equal to `val`.
 */
var removeElement = function (nums, val) {
  // Implementation
};
```

## Algorithm Explanation

The algorithm uses a two-pointer technique:

1. **nonValPosition**: Tracks the position where the next non-val element should be placed
2. **i**: Iterates through the entire array

For each element:

- If the element is not equal to `val`, it's copied to the `nonValPosition` index and `nonValPosition` is incremented
- If the element equals `val`, it's skipped

## Edge Cases

- **Empty Array**: Returns 0
- **All Elements Equal val**: Returns 0
- **No Elements Equal val**: Returns original array length

## Example Usage

```javascript
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
// Output: 5
// Modified array: [0,1,3,0,4,_,_,_]
```

## Performance Analysis

| Metric           | Value        | Description                                                                 |
| ---------------- | ------------ | --------------------------------------------------------------------------- |
| Time Complexity  | O(n)         | Linear time as we traverse the array exactly once                           |
| Space Complexity | O(1)         | Constant space as we modify the array in-place                              |
| Speed            | Fast         | Optimal for this problem with minimal operations                            |
| Readability      | High         | Simple and straightforward implementation                                   |
| Recommended Use  | General case | Works well for all input sizes within the problem constraints (0-100 items) |

## Alternative Approaches

1. **Splice Method**:

   - Less efficient (O(n²) time) due to array re-indexing
   - More readable but not optimal for performance

2. **Filter Method**:
   - Doesn't modify original array in-place
   - Creates new array (violates problem constraints)

## Conclusion

The implemented solution provides the optimal balance between performance and readability while satisfying all problem constraints. It's particularly well-suited for small to medium-sized arrays as specified in the problem constraints.
