/**
 * Finds the pivot index in an array where the sum of elements to the left equals the sum of elements to the right.
 *
 * Problem Summary:
 * - The pivot index is the index where the sum of all numbers to its left is equal to the sum of all numbers to its right.
 * - If the index is on the left edge (index 0), the left sum is 0.
 * - If the index is on the right edge (last index), the right sum is 0.
 * - Return the leftmost pivot index if multiple exist. Return -1 if no pivot index exists.
 *
 * Edge Cases:
 * - Single element array: Pivot is 0 (left and right sums are 0).
 * - Empty array: No pivot, return -1.
 * - All elements zero: Pivot is 0 (leftmost index).
 * - Pivot at first or last index.
 * - No pivot index (e.g., [1, 2, 3]).
 * - Large arrays with pivot in the middle.
 * - Arrays with negative numbers or alternating signs.
 *
 * @param {number[]} nums - The input array of integers.
 * @returns {number} The leftmost pivot index or -1 if none exists.
 */
const pivotIndex = function (nums) {
  /**
   * Optimized solution using a single loop.
   * - Calculate the total sum of the array first.
   * - Iterate through the array, maintaining a running left sum.
   * - The right sum at any index is total sum - left sum - current element.
   * - If left sum equals right sum, return the current index.
   *
   * Time Complexity: O(n) (two passes: one for total sum, one for iteration).
   * Space Complexity: O(1) (constant extra space).
   *
   * @param {number[]} nums - The input array.
   * @returns {number} The pivot index or -1.
   */
  const pivotIndexUsingOneLoop = (nums) => {
    if (nums.length === 0) return -1; // Edge case: empty array.
    let totalSum = nums.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
      // Right sum = total sum - left sum - current element.
      if (leftSum === totalSum - leftSum - nums[i]) {
        return i; // Pivot found.
      }
      leftSum += nums[i]; // Update left sum for next iteration.
    }
    return -1; // No pivot found.
  };

  /**
   * Brute-force solution using nested loops.
   * - For each index, calculate the left and right sums separately.
   * - If left sum equals right sum, return the index.
   *
   * Time Complexity: O(n^2) (nested loops).
   * Space Complexity: O(1) (constant extra space).
   *
   * @param {number[]} nums - The input array.
   * @returns {number} The pivot index or -1.
   */
  const pivotIndexUsingTwoLoops = (nums) => {
    if (nums.length === 0) return -1; // Edge case: empty array.
    for (let i = 0; i < nums.length; i++) {
      let leftSum = 0;
      let rightSum = 0;
      // Calculate left sum (elements before index i).
      for (let j = 0; j < i; j++) {
        leftSum += nums[j];
      }
      // Calculate right sum (elements after index i).
      for (let j = i + 1; j < nums.length; j++) {
        rightSum += nums[j];
      }
      if (leftSum === rightSum) {
        return i; // Pivot found.
      }
    }
    return -1; // No pivot found.
  };

  // Log results for both approaches.
  console.log(`Pivot Index (Two Loops): `, pivotIndexUsingTwoLoops(nums));
  console.log(`Pivot Index (One Loop): `, pivotIndexUsingOneLoop(nums));
};

// Test cases.
pivotIndex([1, 2, 3]); // Output: -1 (no pivot).
pivotIndex([1, 7, 3, 6, 5, 6]); // Output: 3 (pivot at index 3).
pivotIndex([2, 1, -1]); // Output: 0 (pivot at first index).
pivotIndex([0, 0, 0, 0]); // Output: 0 (all elements zero, leftmost pivot).
pivotIndex([-1, -2, -3, -2, -1]); // Output: 2 (pivot in negative array).
