# Fibonacci number best case is `Iterative Fibonacci with Temp Variable`

---

## ✅ 1. **Recursive Fibonacci (Naive)**

```js
var fib = function (n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
};
```

### 🔍 How It Works:

- Recursively calls `fib(n-1)` and `fib(n-2)` until it hits the base case.
- This directly follows the mathematical definition of Fibonacci.

### ⚠️ Time & Space Complexity:

- **Time**: `O(2^n)` — Exponential growth due to repeated calculations.
- **Space**: `O(n)` — Due to call stack from recursion depth.

### 🚫 Downsides:

- Extremely slow for large `n` (e.g. `fib(40)` takes noticeable time).
- Lots of repeated computation (`fib(30)` may compute `fib(20)` dozens of times).

---

## ✅ 2. **Iterative Fibonacci with Temp Variable**

```js
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
```

### 🔍 How It Works:

- Uses a simple loop to update two variables (`n1` and `n2`) iteratively.
- Avoids recursion entirely.

### ✅ Time & Space Complexity:

- **Time**: `O(n)`
- **Space**: `O(1)` — Constant space, no recursion or extra data structures.

### ✅ Benefits:

- Fast and memory-efficient.
- Ideal for most practical use cases.

---

## ✅ 3. **Iterative Fibonacci Using Destructuring**

```js
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
```

### 🔍 How It Works:

- Same logic as the previous loop, but uses **array destructuring** for cleaner swapping.

### ✅ Time & Space Complexity:

- **Time**: `O(n)`
- **Space**: `O(1)`

### ⚠️ Minor Note:

- Slightly slower than the `temp` version due to destructuring overhead (microseconds).
- Still a solid and elegant solution.

---

## ✅ 4. **Recursive Fibonacci with Memoization (Map)**

```js
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
```

### 🔍 How It Works:

- Recursively calculates Fibonacci numbers but **stores** previously computed values in a `Map`.
- This avoids recomputing values (a big improvement over naive recursion).

### ✅ Time & Space Complexity:

- **Time**: `O(n)`
- **Space**: `O(n)` — Because it stores up to `n` values in the `Map`.

### ✅ Benefits:

- Elegant mix of recursion + optimization.
- Ideal when you're already working with recursion or want a more functional approach.

---

## 🏆 **Which One Is Best?**

| Version                   | Time Complexity | Space Complexity | Speed              | Readability | Recommended Use                 |
| ------------------------- | --------------- | ---------------- | ------------------ | ----------- | ------------------------------- |
| Recursive (Naive)         | ❌ O(2^n)       | O(n)             | ❌ Slow            | ✅ High     | For teaching/concept only       |
| Iterative (with temp)     | ✅ O(n)         | ✅ O(1)          | ✅ Fast            | ✅ High     | ✅ Best for real-world use      |
| Iterative (destructuring) | ✅ O(n)         | ✅ O(1)          | ⚠️ Slightly slower | ✅ Clean    | Good if you like concise code   |
| Memoized Recursive (Map)  | ✅ O(n)         | ⚠️ O(n)          | ✅ Fast            | ✅ High     | Great if recursion is preferred |

---

### ✅ Final Verdict:

For **performance-critical or production code**, go with:

```js
// Best all-around:
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
```
