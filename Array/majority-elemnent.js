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
