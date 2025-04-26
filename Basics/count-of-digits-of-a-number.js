/**
 * Question: Count the number digits of a number
 */

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
