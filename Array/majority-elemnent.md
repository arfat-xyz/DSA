### **LeetCode Problem: [Majority Element](https://leetcode.com/problems/majority-element/description/)**

Given an array of size `n`, find the majority element (appears more than `⌊n / 2⌋` times). The solution must run in linear time and constant space.

### Main Code

```jsx
/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
 */
var majorityElement = function (nums) {
  const majorityElementByHashMap = (numbers) => {
    const newMap = new Map(numbers.map((d) => [d, 0]));
    numbers.forEach((val) => newMap.set(val, newMap.get(val) + 1));
    const [val] = [...newMap].find(
      ([key, value]) => value === Math.max(...newMap.values())
    );
    return val;
  };

  const majorityElementsByBoyerMooreAlgorithm = (numbers) => {
    let count = 0,
      candidate = numbers[0];
    for (let num of numbers) {
      if (count === 0) {
        candidate = num;
        count++;
        continue;
      }
      if (num === candidate) {
        count++;
      } else {
        count--;
      }
    }
    return candidate;
  };
  console.log(`majorityElementByHashMap: `, majorityElementByHashMap(nums));
  console.log(
    `majorityElementsByBoyerMooreAlgorithm: `,
    majorityElementsByBoyerMooreAlgorithm(nums)
  );
};

majorityElement([
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7,
  7, 7, 7,
]);
```

## **1. `majorityElementByHashMap` Function**

### **Approach: Hash Map Counting**

This function uses a hash map to count the occurrences of each number and then finds the one with the highest count.

### **Code with Comments:**

```jsx
/**
 * Finds the majority element using a hash map to count occurrences.
 * @param {number[]} numbers - The input array of numbers.
 * @returns {number} The majority element.
 *
 * Time Complexity: O(n) - Two passes over the array.
 * Space Complexity: O(n) - Stores counts in a hash map.
 */
const majorityElementByHashMap = (numbers) => {
  // Initialize a map with each number as a key and count initialized to 0.
  const newMap = new Map(numbers.map((d) => [d, 0]));

  // Increment the count for each number in the array.
  numbers.forEach((val) => newMap.set(val, newMap.get(val) + 1));

  // Find the key with the maximum count.
  const [val] = [...newMap].find(
    ([key, value]) => value === Math.max(...newMap.values())
  );

  return val;
};
```

### **How It Works:**

1. **Initialization:**
   - A `Map` is created where each unique number in the array is a key, and the initial count is `0`.
2. **Counting Occurrences:**
   - Iterate through the array and increment the count for each number.
3. **Finding the Majority Element:**
   - The entry with the highest count is identified and returned.

### **Pros:**

✅ **Easy to Understand** – Straightforward counting approach.

✅ **Works Correctly** – Guaranteed to find the majority element.

### **Cons:**

❌ **Extra Space (O(n))** – Requires a hash map to store counts.

❌ **Slower Due to Two Passes** – One pass for counting and another for finding the max.

---

## **2. `majorityElementsByBoyerMooreAlgorithm` Function**

### **Approach: Boyer-Moore Voting Algorithm**

This function uses the **Boyer-Moore Voting Algorithm**, which efficiently finds the majority element in **O(n) time and O(1) space**.

### **Code with Comments:**

```jsx
/**
 * Finds the majority element using the Boyer-Moore Voting Algorithm.
 * @param {number[]} numbers - The input array of numbers.
 * @returns {number} The majority element.
 *
 * Time Complexity: O(n) - Single pass over the array.
 * Space Complexity: O(1) - Uses constant extra space.
 */
const majorityElementsByBoyerMooreAlgorithm = (numbers) => {
  let count = 0;
  let candidate = numbers[0];

  for (let num of numbers) {
    if (count === 0) {
      candidate = num; // New candidate if count drops to zero.
      count++;
      continue;
    }
    if (num === candidate) {
      count++; // Increment if the same candidate.
    } else {
      count--; // Decrement if a different number.
    }
  }

  return candidate; // The remaining candidate is the majority element.
};
```

### **How It Works:**

1. **Initialization:**
   - Start with `count = 0` and assume the first element is the candidate.
2. **Iterate Through the Array:**
   - If `count == 0`, set the current number as the new candidate.
   - If the current number matches the candidate, increment `count`.
   - Otherwise, decrement `count`.
3. **Final Candidate:**
   - The last remaining candidate is the majority element (since it appears more than `n/2` times).

### **Pros:**

✅ **Optimal Time (O(n))** – Single pass through the array.

✅ **Constant Space (O(1))** – Only uses two variables (`count` and `candidate`).

✅ **Efficient** – Best for large datasets.

### **Cons:**

❌ **Assumes Majority Exists** – If no majority element exists, it may return an incorrect result.

---

## **Comparison Table**

| Function                                | Time Complexity | Space Complexity | Speed  | Readability | Recommended Use             |
| --------------------------------------- | --------------- | ---------------- | ------ | ----------- | --------------------------- |
| `majorityElementByHashMap`              | O(n)            | O(n)             | Slower | High        | When clarity is preferred.  |
| `majorityElementsByBoyerMooreAlgorithm` | O(n)            | O(1)             | Faster | Moderate    | Optimal for large datasets. |

### **Final Recommendation:**

- **Use `majorityElementsByBoyerMooreAlgorithm`** for **optimal performance** (faster & less memory).
- **Use `majorityElementByHashMap`** if **readability** is more important than space efficiency.

The **Boyer-Moore algorithm** is the best choice for this problem due to its **O(1) space** and **O(n) time** complexity. 🚀
