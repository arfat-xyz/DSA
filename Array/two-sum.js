/**
 * Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
 */
var twoSum = function (nums, target) {
  const findTwoSumUsingForLoop = (numbers, trgt) => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === trgt && i !== j) {
          return [i, j];
        }
      }
    }
  };

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

  console.log(`findTwoSumUsingForLoop: `, findTwoSumUsingForLoop(nums, target));
  console.log(`fundTwoSumUsingHashMap: `, fundTwoSumUsingHashMap(nums, target));
};
// twoSum([3, 2, 3], 6);
twoSum([1, 3, 4, 2], 6);
