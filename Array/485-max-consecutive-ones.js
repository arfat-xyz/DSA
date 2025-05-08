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
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
