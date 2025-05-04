/**
 * Moves all zeros to the end of the array while maintaining the relative order of non-zero elements.
 *
 * Problem Summary:
 * - Given an integer array `nums`, move all zeros to the end while keeping non-zero elements' order.
 * - Must be done in-place without making a copy of the array.
 *
 * Edge Cases:
 * - Single zero element: [0] → [0]
 * - Single non-zero element: [1] → [1]
 * - All zeros: [0, 0, 0] → [0, 0, 0]
 * - All non-zeros: [1, 2, 3] → [1, 2, 3]
 * - Zeros at beginning: [0, 0, 1, 2] → [1, 2, 0, 0]
 * - Zeros at end: [1, 2, 0, 0] → [1, 2, 0, 0]
 * - Zeros in middle: [1, 0, 2, 0, 3] → [1, 2, 3, 0, 0]
 * - Large arrays with scattered zeros
 * - Mixed positive/negative/zero values
 *
 * @param {number[]} nums - The input array to be modified in-place
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  /**
   * My Implementation (Less Optimized)
   * - Uses nested loops to shift zeros to the end
   * - Time Complexity: O(n^2) in worst case
   * - Space Complexity: O(1)
   *
   * @param {number[]} nums - The array to modify
   * @returns {number[]} The modified array (for testing)
   */
  const moveZeroesMyImplementation = (nums) => {
    if (nums.length < 2) return nums;

    const total = nums.reduce((sum, curr) => sum + curr, 0);
    if (total === 0) return nums; // All zeros case

    let i = 0,
      totalZero = 0;
    do {
      if (nums[i] === 0) {
        totalZero++;
        // Shift all elements left
        for (let j = i; j < nums.length - 1; j++) {
          nums[j] = nums[j + 1];
        }
        nums[nums.length - 1] = 0;
        // Check if new current position is zero
        if (nums[i] === 0) continue;
      }
      i++;
    } while (i <= nums.length - totalZero);

    return nums;
  };

  /**
   * Optimal Implementation (Two-Pointer Technique)
   * - Uses two pointers to move non-zeros to front in single pass
   * - Fills remaining positions with zeros
   * - Time Complexity: O(n)
   * - Space Complexity: O(1)
   *
   * @param {number[]} nums - The array to modify
   * @returns {number[]} The modified array (for testing)
   */
  const moveZeroesBestImplementation = (nums) => {
    let nonZeroPosition = 0;

    // Move all non-zero elements to front
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[nonZeroPosition] = nums[i];
        nonZeroPosition++;
      }
    }

    // Fill remaining positions with zeros
    for (let i = nonZeroPosition; i < nums.length; i++) {
      nums[i] = 0;
    }

    return nums;
  };

  // Test both implementations
  console.log("Original array:", [...nums]);
  console.log("My Implementation:", moveZeroesMyImplementation([...nums]));
  console.log(
    "Optimal Implementation:",
    moveZeroesBestImplementation([...nums])
  );
  console.log("---------------------");
};

// Test Cases
moveZeroes([0, 1, 0, 3, 12]); // [1, 3, 12, 0, 0]
moveZeroes([0]); // [0]
moveZeroes([0, 0, 1]); // [1, 0, 0]
moveZeroes([1]); // [1]
moveZeroes([0, 0, 0, 0]); // [0, 0, 0, 0]
moveZeroes([1, 2, 3, 4]); // [1, 2, 3, 4]
moveZeroes([0, 0, 1, 2, 3]); // [1, 2, 3, 0, 0]
moveZeroes([1, 2, 3, 0, 0]); // [1, 2, 3, 0, 0]
