/**
 * @param {number} n
 * @return {number}
 */
//  Fobonacci using recursive
var fibonacciUsingRecursive = function (n) {
  if (n === 0 || n === 1) return n;
  return fibonacciUsingRecursive(n - 1) + fibonacciUsingRecursive(n - 2);
};

//  Fobonacci using for loop
var fibonacciUsingLoop = function (n) {
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

// Fibonacci using for loop without temp and Array destructuring
var fibonacciUsingLoopAndArrayDestructuring = function (n) {
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

console.log(`Fibonacci using recursive: `, fibonacciUsingRecursive(10));
console.log(`Fibonacci using Loop: `, fibonacciUsingLoop(10));
console.log(
  `Fibonacci using Loop without Temp and Array destructuring: `,
  fibonacciUsingLoopAndArrayDestructuring(10)
);
