# Practise Loop, functions & Math Problems

### Question 1: Sum of all natural numbers from 1 to n

```javascript
function sumOfNaturalNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumOfNaturalNumber(5)); // 15
console.log(sumOfNaturalNumber(10)); // 55
console.log(sumOfNaturalNumber(8)); // 36
```

### Question 2: Sum of digits of a number

```javascript
/**
 * Question: Sum of digits of a number
 * 12445 = 1 + 2 +4 + 4 + 5 = 16
 */

function sumOfDigitsOfANumber(num) {
  let sum = 0;
  do {
    const lastDigit = num % 10;
    sum += lastDigit;
    num = parseInt(num / 10);
  } while (num !== 0);
  return sum;
}

function sumOfDigitsOfANumberUsingString(num) {
  const stringifiedNum = String(num);
  let sum = 0;
  for (let i = 0; i < stringifiedNum.length; i++) {
    sum += parseInt(stringifiedNum[i]);
  }
  return sum;
}

console.log(
  `using do while loop with digit. The sum of digits of a number ${12445} is`,
  sumOfDigitsOfANumber(12445)
);
console.log(
  `using String. The sum of digits of a number ${12445} is`,
  sumOfDigitsOfANumberUsingString(12445)
);
```

### Question 3: Count the number of digits of a number

```javascript
function countTheNumberDigitsOfANumber(num) {
  let count = 0;
  num = Math.abs(num);
  do {
    count++;
    num = parseInt(num / 10);
  } while (num > 0);
  return count;
}

function countTheNumberDigitsUsingString(num) {
  num = Math.abs(num);
  if (!(num > 0)) {
    return `not a number`;
  }
  return String(num).length;
}
console.log(countTheNumberDigitsOfANumber(10003));
console.log(countTheNumberDigitsUsingString(10003));
```

### Question 4: Check if a number is palindrome

```javascript
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let reverseNum = 0,
    originalValue = x;
  while (x > 0) {
    reverseNum = reverseNum * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return reverseNum === originalValue;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(1234)); // false
```

### Question 5: Find nth Fibonacci number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
such that each number is the sum of the two preceding ones, starting from 0 and 1.

```javascript
/**
 * @param {number} n
 * @return {number}
 */
// //  Fobonacci using recursive
var fib = function (n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
};

//  Fobonacci using for loop
var fib = function (n) {
  if (n <= 1) {
    return n;
  }
  let n1 = 0,
    n2 = 1;
  for (let i = 2; i <= n; i++) {
    let temp = n2;
    n2 = n1 + temp;
    n1 = temp;
  }
  return n2;
};

// Fibonacci using for loop without temp
var fib = function (n) {
  if (n <= 1) {
    return n;
  }
  let n1 = 0,
    n2 = 1;
  for (let i = 1; i < n; i++) {
    [n1, n2] = [n2, n1 + n2];
  }
  return n2;
};

// Fibonacci using Map object
var fib = function (n) {
  const map = new Map([
    [1, 1],
    [0, 0],
    [2, 1],
    [3, 2],
  ]);

  const recursive = (n1) => {
    if (!map.has(n1)) {
      map.set(n1, recursive(n1 - 1) + recursive(n1 - 2));
    }
    return map.get(n1);
  };
  return recursive(n);
};

// Fibonacci Sequence: 0 1 1 2 3 5 8...
console.log(fib(5)); // 5
console.log(fib(10)); // 55
```

### Question 6: Missing Number in an Array

Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.

```javascript
var missingNumber = function (nums) {
  const loopSolution = (numsArr) => {
    let actualSum = 0;
    providedSum = 0;
    for (let i = 0; i <= numsArr.length; i++) {
      actualSum += i;
      if (numsArr[i] !== undefined) {
        providedSum += numsArr[i];
      }
    }
    return actualSum - providedSum;
  };

  const oneLineSolution = (numsArr) => {
    return (
      (numsArr.length * (numsArr.length + 1)) / 2 -
      numsArr.reduce((acc, num) => acc + num)
    );
  };
  return oneLineSolution(nums);
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
```

```typescript
function missingNumber(nums: number[]): number {
  const loopSolution = (numsArr: number[]) => {
    let actualSum: number = 0;
    let providedSum: number = 0;
    for (let i: number = 0; i <= numsArr.length; i++) {
      actualSum += i;
      if (numsArr[i]) {
        providedSum += numsArr[i];
      }
    }
    return actualSum - providedSum;
  };
  return loopSolution(nums);
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
```

## Practice Questions

- [Count Odd Numbers in an Interval Range](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)
- [Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)
- [Power of Two](https://leetcode.com/problems/power-of-two/)
- [Find Square root of a Number](https://leetcode.com/problems/sqrtx/)
