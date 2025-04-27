# Two Sum Problem Analysis

([Problem Link](https://leetcode.com/problems/two-sum/)).

## 1. Brute Force Approach (`findTwoSumUsingForLoop`)

```javascript
/**
 * Finds two numbers in an array that add up to the target using nested loops
 *
 * @param {number[]} numbers - Array of integers to search
 * @param {number} trgt - Target sum to achieve
 * @returns {number[]} - Indices of the two numbers that sum to target
 *
 * Time Complexity: O(n²) - Nested loops iterate through all possible pairs
 * Space Complexity: O(1) - No additional data structures used
 *
 * Downsides: Inefficient for large arrays due to quadratic time complexity
 * Benefits: Simple to understand and implement, no extra memory required
 */
const findTwoSumUsingForLoop = (numbers, trgt) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === trgt && i !== j) {
        return [i, j];
      }
    }
  }
};
```

**How it works:**

- Uses two nested loops to check every possible pair of numbers in the array
- The outer loop selects each number one by one
- The inner loop checks if any subsequent number adds up to the target
- Returns the indices of the first valid pair found

## 2. Hash Map Approach (`fundTwoSumUsingHashMap`)

```javascript
/**
 * Finds two numbers in an array that add up to the target using a hash map
 *
 * @param {number[]} numbers - Array of integers to search
 * @param {number} trgt - Target sum to achieve
 * @returns {number[]} - Indices of the two numbers that sum to target
 *
 * Time Complexity: O(n) - Single pass through the array after map creation
 * Space Complexity: O(n) - Stores all elements in a hash map
 *
 * Downsides: Uses extra memory for the hash map, slightly more complex logic
 * Benefits: Much faster for large arrays due to linear time complexity
 */
const fundTwoSumUsingHashMap = (numbers, trgt) => {
  const newMap = new Map(numbers.map((n, i) => [n, i]));
  for (let i = 0; i < numbers.length; i++) {
    if (newMap.get(trgt - numbers[i])) {
      const positionOfRemainingValue = newMap.get(trgt - numbers[i]);
      if (positionOfRemainingValue === i) {
        const secondIndexOfRemainingValue = numbers.find(
          (val, i) =>
            val === numbers[positionOfRemainingValue] &&
            i !== positionOfRemainingValue
        );
        if (secondIndexOfRemainingValue)
          return [i, secondIndexOfRemainingValue];
        continue;
      }
      return [i, positionOfRemainingValue];
    }
  }
};
```

**How it works:**

1. Creates a hash map where keys are numbers and values are their indices
2. Iterates through each number in the array
3. For each number, calculates the complement (target - current number)
4. Checks if the complement exists in the hash map
5. Handles edge case where the complement is the same as current number
6. Returns the indices once a valid pair is found

## Comparison Table

| Approach                   | Time Complexity | Space Complexity | Speed | Readability | Recommended Use               |
| -------------------------- | --------------- | ---------------- | ----- | ----------- | ----------------------------- |
| Brute Force (nested loops) | O(n²)           | O(1)             | Slow  | High        | Small arrays, simple problems |
| Hash Map                   | O(n)            | O(n)             | Fast  | Medium      | Large arrays, production code |
