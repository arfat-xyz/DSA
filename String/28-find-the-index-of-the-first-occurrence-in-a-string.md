# 🛠 Your `strStr()` Implementation

---

## 1. `strStrUsingIndexOf`

```javascript
/**
 * Finds the index of the first occurrence of needle in haystack.
 * @param {string} haystack - The string to search within
 * @param {string} needle - The substring to search for
 * @return {number} Index of first occurrence or -1 if not found
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
```

### 🔍 How it works:

- Uses JavaScript's native `String.prototype.indexOf()`
- Returns the first index where `needle` is found in `haystack`
- Returns -1 if `needle` is not found
- Handles edge cases automatically (empty strings, etc.)

### 📈 Time and Space Complexity:

|                  | Worst Case | Typical Case |
| ---------------- | ---------- | ------------ |
| Time Complexity  | O(n\*m)    | O(n+m)       |
| Space Complexity | O(1)       | O(1)         |

---

### ⚡ Benefits:

- **Extremely simple and clean** one-line implementation
- **Highly optimized** by JavaScript engines
- **Automatic edge case handling**
- **Most readable** solution

### ⚠️ Downsides:

- Not suitable if you need to implement the algorithm manually
- Exact performance depends on JavaScript engine implementation

---

## 2. `strStrNaiveImplementation`

```javascript
var strStrNaive = function (haystack, needle) {
  if (needle.length === 0) return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substr(i, needle.length) === needle) return i;
  }
  return -1;
};
```

### 🔍 How it works:

- Checks for empty needle first (returns 0)
- Loops through possible starting positions
- Uses `substr` to check for matches
- Returns first match or -1 if no match found

### 📈 Time and Space Complexity:

|                  | Complexity |
| ---------------- | ---------- |
| Time Complexity  | O(n\*m)    |
| Space Complexity | O(1)       |

---

### ⚡ Benefits:

- **Clear implementation** of the naive algorithm
- **Good for learning** purposes
- **No dependencies** on built-in methods

### ⚠️ Downsides:

- **Less efficient** than native implementation
- **Slower** for large inputs
- **More verbose** than built-in solution

---

## 3. `strStrKMPAlgorithm`

```javascript
// Implementation of Knuth-Morris-Pratt algorithm would go here
// (Typically much longer and more complex)
```

### 🔍 How it works:

- Uses the KMP (Knuth-Morris-Pratt) algorithm
- Preprocesses the needle to create a partial match table
- Achieves linear O(n+m) time complexity
- More complex but theoretically faster for large inputs

### 📈 Time and Space Complexity:

|                  | Complexity |
| ---------------- | ---------- |
| Time Complexity  | O(n+m)     |
| Space Complexity | O(m)       |

---

### ⚡ Benefits:

- **Better theoretical performance** for large inputs
- **Optimal algorithm** for string searching
- **Educational value**

### ⚠️ Downsides:

- **Much more complex** to implement
- **Harder to read** and maintain
- **Overkill** for most practical cases in JavaScript

---

# 📊 Full Comparison Table:

| Approach             | Time Complexity | Space Complexity | Speed (Real-World) | Readability | Recommended Use             |
| -------------------- | --------------- | ---------------- | ------------------ | ----------- | --------------------------- |
| `strStrUsingIndexOf` | O(n\*m) worst   | O(1)             | 🚀 Fastest         | ★★★★★       | Always prefer in production |
| `strStrNaive`        | O(n\*m)         | O(1)             | ⚠️ Slow            | ★★★☆☆       | For learning/education      |
| `strStrKMPAlgorithm` | O(n+m)          | O(m)             | 🏎️ Theoretical     | ★★☆☆☆       | Special cases only          |

---

# 🎯 Final Recommendation:

- **For production code**: Always use `strStrUsingIndexOf` (native implementation)
- **For learning purposes**: Implement the naive version to understand the basics
- **For algorithmic study**: Implement KMP, but rarely needed in practice
- **In interviews**: Use native implementation unless specifically asked to implement manually

The native implementation is:

- Fastest in real-world usage
- Most readable
- Most maintainable
- Already handles all edge cases optimally

Only consider manual implementations when:

1. You need to demonstrate algorithm knowledge
2. You're working with extremely constrained environments
3. You need special matching behavior not provided by `indexOf`
