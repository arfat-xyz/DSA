Here’s the cleaned-up version in Markdown format, suitable for documentation or sharing:

# Pivot Index Problem

## Problem Summary

Given an array of integers `nums`, the **pivot index** is the index where:

- The sum of all elements to its left equals the sum of all elements to its right.
- If the index is on the left edge (e.g., index `0`), the left sum is `0`.
- If the index is on the right edge (e.g., last index), the right sum is `0`.
- Return the **leftmost pivot index** if multiple exist. Return `-1` if no pivot exists.

### Examples

| Input                | Output | Explanation                                                   |
| -------------------- | ------ | ------------------------------------------------------------- |
| `[1, 7, 3, 6, 5, 6]` | `3`    | Left sum = `1+7+3=11`, Right sum = `5+6=11`                   |
| `[1, 2, 3]`          | `-1`   | No index satisfies the condition.                             |
| `[2, 1, -1]`         | `0`    | Left sum = `0` (no left elements), Right sum = `1 + (-1) = 0` |

## Edge Cases

1. **Single-element array**

   - Input: `[x]`
   - Output: `0` (left and right sums are `0`).

2. **Empty array**

   - Input: `[]`
   - Output: `-1` (no pivot exists).

3. **All elements zero**

   - Input: `[0, 0, 0, 0]`
   - Output: `0` (any index is valid; return leftmost).

4. **Pivot at first/last index**

   - Input: `[2, 1, -1]` → Output: `0`
   - Input: `[-1, 1, 2]` → Output: `2`

5. **No pivot index**

   - Input: `[1, 2, 3]` → Output: `-1`.

6. **Large arrays**

   - Ensure the solution handles arrays of length up to `10^4` efficiently.

7. **Negative numbers**
   - Input: `[-1, -2, -3, -2, -1]` → Output: `2` (left sum = `-3`, right sum = `-3`).

## Solutions

### 1. Optimized Approach (O(n) Time, O(1) Space)

```javascript
const pivotIndex = function (nums) {
  if (nums.length === 0) return -1;
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
```

**How it works**:

1. Calculate the `totalSum` of the array.
2. Traverse the array while maintaining `leftSum`.
3. For each index `i`, check if `leftSum == totalSum - leftSum - nums[i]` (i.e., right sum).
4. Return the first valid index or `-1`.

### 2. Brute-Force Approach (O(n²) Time, O(1) Space)

```javascript
const pivotIndexBruteForce = function (nums) {
  if (nums.length === 0) return -1;
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) leftSum += nums[j];
    for (let j = i + 1; j < nums.length; j++) rightSum += nums[j];
    if (leftSum === rightSum) return i;
  }
  return -1;
};
```

**How it works**:

1. For each index `i`, compute `leftSum` (sum of elements before `i`).
2. Compute `rightSum` (sum of elements after `i`).
3. Return `i` if sums match, otherwise continue.

## Test Cases

```javascript
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
console.log(pivotIndex([0, 0, 0, 0])); // 0
console.log(pivotIndex([-1, -2, -3, -2, -1])); // 2
```

## Key Takeaways

- **Optimized approach** is preferred for large inputs (O(n) time).
- **Edge cases** must be handled explicitly (empty array, single element, etc.).
- The problem tests understanding of **prefix sums** and array traversal.
