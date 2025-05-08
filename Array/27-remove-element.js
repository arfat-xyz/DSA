/**
 * Removes all occurrences of `val` from `nums` in-place and returns the count of elements not equal to `val`.
 * @param {number[]} nums - The input array.
 * @param {number} val - The value to remove from the array.
 * @return {number} - The count of elements not equal to `val`.
 *
 * Edge Cases:
 * - Empty Array: If `nums` is empty, returns 0.
 * - All Elements are `val`: If every element in `nums` is `val`, returns 0.
 * - No Elements are `val`: If none of the elements in `nums` are `val`, returns the length of `nums`.
 */
var removeElement = function (nums, val) {
  let nonValPosition = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[nonValPosition] = nums[i];
      nonValPosition++;
    }
  }
  return nonValPosition;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Expected output: 5
