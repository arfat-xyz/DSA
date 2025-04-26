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
