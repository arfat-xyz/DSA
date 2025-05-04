# Move Zeroes to End of Array

## Problem Statement

Given an integer array `nums`, move all `0`'s to the end while maintaining the relative order of non-zero elements. The operation must be performed in-place without making a copy of the array.

**Examples:**

```javascript
Input: [0,1,0,3,12] → Output: [1,3,12,0,0]
Input: [0] → Output: [0]
```

## Edge Cases

| Input Case      | Description              | Expected Output     |
| --------------- | ------------------------ | ------------------- |
| Single zero     | `[0]`                    | `[0]`               |
| Single non-zero | `[1]`                    | `[1]`               |
| All zeros       | `[0,0,0]`                | `[0,0,0]`           |
| No zeros        | `[1,2,3]`                | `[1,2,3]`           |
| Zeros at start  | `[0,0,1,2]`              | `[1,2,0,0]`         |
| Zeros at end    | `[1,2,0,0]`              | `[1,2,0,0]`         |
| Mixed zeros     | `[1,0,2,0,3]`            | `[1,2,3,0,0]`       |
| Large arrays    | Array with 10^4 elements | Handled efficiently |

## Solutions

### 1. My Implementation (`moveZeroesMyImplementation`)

```javascript
const moveZeroesMyImplementation = (nums) => {
  if (nums.length < 2) return nums;

  const total = nums.reduce((sum, curr) => sum + curr, 0);
  if (total === 0) return nums;

  let i = 0,
    totalZero = 0;
  do {
    if (nums[i] === 0) {
      totalZero++;
      for (let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
      nums[nums.length - 1] = 0;
      if (nums[i] === 0) continue;
    }
    i++;
  } while (i <= nums.length - totalZero);
  return nums;
};
```

**Characteristics:**

- Uses nested loops to shift elements
- Checks for all zeros case with sum
- Time Complexity: O(n²) in worst case
- Space Complexity: O(1)

### 2. Best Implementation (`moveZeroesBestImplementation`)

```javascript
const moveZeroesBestImplementation = (nums) => {
  let nonZeroPosition = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroPosition] = nums[i];
      nonZeroPosition++;
    }
  }
  for (let i = nonZeroPosition; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
```

**Characteristics:**

- Two-pass approach
- First pass moves non-zeros to front
- Second pass fills remaining with zeros
- Time Complexity: O(n)
- Space Complexity: O(1)

## Performance Comparison

| Implementation                 | Time Complexity | Space Complexity | Best For     |
| ------------------------------ | --------------- | ---------------- | ------------ |
| `moveZeroesMyImplementation`   | O(n²)           | O(1)             | Small arrays |
| `moveZeroesBestImplementation` | O(n)            | O(1)             | All cases    |

## Test Cases

```javascript
console.log(moveZeroesBestImplementation([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroesBestImplementation([0, 0, 1])); // [1,0,0]
console.log(moveZeroesBestImplementation([1, 2, 3])); // [1,2,3]
```

## Key Takeaways

1. `moveZeroesBestImplementation` is the optimal O(n) solution
2. Both implementations modify the array in-place
3. Original function names preserved as requested
4. Edge cases are handled in both implementations
