# 🛠 Your Three `fizzBuzz` Functions:

---

## 1. `fizzBuzzUsingArrAndBeginningCondition`

```javascript
const fizzBuzzUsingArrAndBeginningCondition = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(`${i}`);
    }
  }
  return arr;
};
```

### 🔍 How it works:

- It loops from `1` to `n`.
- Checks:
  - Divisible by 3 and 5 → `"FizzBuzz"`
  - Divisible by 3 → `"Fizz"`
  - Divisible by 5 → `"Buzz"`
  - Else → the number as a string.
- Pushes the result into an array.

### 📈 Time and Space Complexity:

|                  |      |
| ---------------- | ---- |
| Time Complexity  | O(n) |
| Space Complexity | O(n) |

---

### ⚡ Benefits:

- Very **easy to read** (classic FizzBuzz style).
- **Logical order** of checks (most specific first).

### ⚠️ Downsides:

- Repeating modulus calculations (`i % 3` and `i % 5`) separately even after a combined check.
- Slightly more `if-else` checks.

---

---

## 2. `fizzBuzzUsingString`

```javascript
const fizzBuzzUsingString = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    let str = "";
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    arr.push(str || `${i}`);
  }
  return arr;
};
```

### 🔍 How it works:

- Loops from `1` to `n`.
- Starts with an empty string `str`.
- Adds `"Fizz"` if divisible by 3.
- Adds `"Buzz"` if divisible by 5.
- If `str` remains empty, pushes the number.

### 📈 Time and Space Complexity:

|                  |      |
| ---------------- | ---- |
| Time Complexity  | O(n) |
| Space Complexity | O(n) |

---

### ⚡ Benefits:

- **Avoids redundant if-else chains**.
- No need to check `divisible by 3 and 5` separately.
- **Elegant and slightly shorter**.

### ⚠️ Downsides:

- Might be **less intuitive for absolute beginners**.
- Slightly less efficient when only one of 3 or 5 matches because you still check both.

---

---

## 3. `fizzBuzzUsingArrayConstructor`

```javascript
const fizzBuzzUsingArrayConstructor = (num) => {
  return Array.from({ length: n }, (_, i) => {
    i += 1;
    let str = "";
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    return str || `${i}`;
  });
};
```

### 🔍 How it works:

- Creates an array of `n` elements using `Array.from`.
- The mapping function runs from `0` to `n-1`, so adjusts with `i + 1`.
- Similar string building as the previous one.

### 📈 Time and Space Complexity:

|                  |      |
| ---------------- | ---- |
| Time Complexity  | O(n) |
| Space Complexity | O(n) |

---

### ⚡ Benefits:

- **Very functional style** (`Array.from` looks clean in modern JS).
- No need for `for` loop setup manually.
- Code is **shorter**.

### ⚠️ Downsides:

- **Slightly less readable** for beginners who don't know how `Array.from` and mapping work.
- Adjusting `i` by `1` can be **confusing**.
- Not super helpful for interview settings unless asked for "fancy" solutions.

---

# 📊 Full Comparison Table:

| Approach                                | Time Complexity | Space Complexity | Speed                            | Readability                             | Recommended Use                             |
| :-------------------------------------- | :-------------- | :--------------- | :------------------------------- | :-------------------------------------- | :------------------------------------------ |
| `fizzBuzzUsingArrAndBeginningCondition` | O(n)            | O(n)             | ✅ Good                          | ✅ Very readable                        | For interviews or beginners                 |
| `fizzBuzzUsingString`                   | O(n)            | O(n)             | ✅ Slightly better               | ✅ Still readable                       | Best balance for clean code                 |
| `fizzBuzzUsingArrayConstructor`         | O(n)            | O(n)             | ✅ Slightly slower than for loop | ❌ Slightly less readable for beginners | Good for fancy clean code, functional style |

---

# 🎯 Final Recommendation:

- **If you want super readable code** → use `fizzBuzzUsingArrAndBeginningCondition`.
- **If you want clean + efficient code** → use `fizzBuzzUsingString`.
- **If you want fancy functional one-liner style** → use `fizzBuzzUsingArrayConstructor` (but only if your team/project likes that style).
