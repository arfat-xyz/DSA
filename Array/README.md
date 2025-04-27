# Array Manipulation in JavaScript: From Basics to Advanced

<p align="center">
  <a href="https://youtu.be/y1vuYL7DtPU">
  <img src="https://img.youtube.com/vi/y1vuYL7DtPU/0.jpg" alt="Must know JavaScript Array Methods | Frontend DSA Interview Questions" />
  </a>
</p>

### How do you create an empty array in JavaScript?

```javascript
const arr = [1, 2, 3, 4, "Hello", { name: "Vishal" }, [1, 2, 3], 4];
// const arr2 = new Array();
console.log(arr);
```

### How do you access the first and last elements of an array?

```javascript
const firstElement = arr[0]; // O(1)
const arrLength = arr.length;
const lastElement = arr[arrLength - 1];
console.log(firstElement, arrLength, lastElement);
```

### How do you remove the last element from an array?

```javascript
const lastElement1 = arr.pop(); // O(1)
console.log(arr, lastElement1);
```

### How do you add an element to the end of an array?

```javascript
arr.push(5); // O(1)
console.log(arr);
```

### How do you add an element to the start of an array?

```javascript
arr.unshift(0); // O(N)
console.log(arr);
```

### How do you remove the first element from an array?

```javascript
arr.shift(); // O(N)
console.log(arr);
```

### How do you loop through an array in JavaScript?

```javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((x, i) => {
  console.log(x);
});

for (let x of arr) {
  console.log(x);
}
```

### Question 1: How do you check if an element exists in an array?

```javascript
const findElement = (arr, target) => {
  for (let x of arr) {
    if (x === target) {
      return true;
    }
  }
  return false;
};

console.log(findElement(arr, "Hello"));
console.log(findElement(arr, "H"));
console.log(arr.includes("Hello"));
```

### Question 2: How do you find the index of an element in an array?

```javascript
const findElementIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(findElementIndex(arr, "Hello"));
console.log(arr.indexOf("Hello"));
```

### How to delete, add & update elements from a specific index?

```javascript
console.log(arr);
arr.splice(1, 3);
console.log(arr);
arr.splice(1, 0, 2, 3, 4, 5, 6);
console.log(arr);
arr.splice(1, 3, 6, 7, 8);
console.log(arr);
```

### `splice()` vs `slice()`

```javascript
const subArr = arr.slice(1, 4); // [start, end)
console.log(subArr);
```

### Shallow Copy of Array

```javascript
const arrB = arr;
arrB.splice(1, 4);
console.log(arrB, arr);
```

### Deep Copy of Array

```javascript
const arrC = [...arr];
const arrD = Array.from(arr);
const arrE = arr.concat();
arrC.splice(1, 4);
arrD.splice(1, 4);
arrE.splice(1, 3);
console.log(arrC, arrD, arrE, arr);
```

### How to concatenate two arrays in JavaScript?

```javascript
const newArr = [...arr, ...arrE];
const newArr2 = arr.concat(arrE);
console.log(newArr, newArr2);
```

### Question 3: How can you check if two arrays are equal?

```javascript
const isArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;

  // One Line solution
  // return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i]);
};

console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));
```

### Question 4: How to sort an array in ascending and descending order?

```javascript
const x = [1, 4, 6, 0, -9, -5];
x.sort(); // O(NlogN)
console.log(x);

x.sort((a, b) => b - a);
console.log(x);
```

### Question 5: How to reverse an array?

```javascript
x.reverse();
console.log(x);
```

### Map, Filter & Reduce

```javascript
const newMapArr = x.map((ele, i) => ele * ele);
console.log(newMapArr);

const positiveNumbers = x.filter((ele, i) => ele > 0);
console.log(positiveNumbers);

const sumOFArr = positiveNumbers.reduce((acc, ele) => acc + ele);
console.log(sumOFArr);
```

### Flat: [1, 2, 4, 5, 6, 7, 8, 9]

```javascript
const y = [1, 2, [4, 5, [6, 7]], 8, 9];
const flattedArray = y.flat(2);
console.log(flattedArray);
```

### `filter()` vs `find()`

```javascript
const positiveNumber = x.find((ele, i) => ele > 0);
console.log(positiveNumber);
```

## Practice Questions

- [Two Sum](https://leetcode.com/problems/two-sum/)
- [Majority Element](https://leetcode.com/problems/majority-element/)
- [Remove Duplicates from sorted array](https://leetcode.com/problems/remove-duplicates-from-sorted-array)
- [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array)
- [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)
- [Move Zeroes](https://leetcode.com/problems/move-zeroes)
- [Remove Element](https://leetcode.com/problems/remove-element)
- [Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/)

# Two Sum

```javascript
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
```

# Majority Element

```javascript
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
