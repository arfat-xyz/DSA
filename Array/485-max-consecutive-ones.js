/**
 * Finds the maximum number of consecutive 1's in a binary array.
 * @param {number[]} nums - The binary array.
 * @returns {number} The maximum number of consecutive 1's.
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curr++;
      max = Math.max(curr, max);
    } else {
      curr = 0;
    }
  }
  return max;
};

// Edge Cases Testing
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2
console.log(findMaxConsecutiveOnes([1, 1, 1, 1])); // Output: 4 (All 1's)
console.log(findMaxConsecutiveOnes([0, 0, 0, 0])); // Output: 0 (All 0's)
console.log(findMaxConsecutiveOnes([1])); // Output: 1 (Single 1)
console.log(findMaxConsecutiveOnes([0])); // Output: 0 (Single 0)
console.log(findMaxConsecutiveOnes([1, 0, 1, 0, 1])); // Output: 1 (Alternating 1's and 0's)
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 1, 1])); // Output: 4 (Longest streak at the end)
console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 1, 0])); // Output: 3 (Longest streak at the beginning)
console.log(findMaxConsecutiveOnes([])); // Output: 0 (Empty array)
