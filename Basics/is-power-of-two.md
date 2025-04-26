# 🛠 Your Two Solutions:

https://leetcode.com/problems/power-of-two/

## 1. **Using Logarithms** (`checkPowerOfTwoUsingLog`):

```javascript
const checkPowerOfTwoUsingLog = (num) => {
  if (num <= 0) return false;
  const base2Value = Math.log2(num);
  return Number.isInteger(base2Value);
};
```

### 🔍 How It Works:

- **Logarithmic check**: The base-2 logarithm of a power of 2 will always return an integer (e.g., `log2(2) = 1`, `log2(4) = 2`, etc.).
- **Steps**:
  1. First, we check if `num` is greater than `0` (because log is not defined for non-positive numbers).
  2. Then, we calculate `Math.log2(num)` — this gives the exponent `k` where `num = 2^k`.
  3. We check if the result is an integer using `Number.isInteger()`.

### 🚀 Time and Space Complexity:

- **Time Complexity**: `O(1)` — Calculating the logarithm is constant time.
- **Space Complexity**: `O(1)` — Only a couple of variables are used.

### ✅ Benefits:

- **Elegant** and simple.
- Works for all positive numbers.

### ⚠️ Downsides:

- **Floating-point precision**: For large numbers, `Math.log2()` may suffer from floating-point errors (especially with very large integers). This could result in rounding errors when checking if `base2Value` is an integer.

---

## 2. **Using Bitwise Operations** (`checkPowerOfTwoUsingBitwise`):

```javascript
const checkPowerOfTwoUsingBitwise = (num) => {
  return num > 0 && (num & (num - 1)) === 0;
};
```

### 🔍 How It Works:

- **Bitwise trick**: This method leverages the properties of binary representation of numbers.
  - Powers of two have exactly **one bit set to `1`** in their binary representation.
  - For example:
    - `2` in binary: `00000010` (only the second bit is `1`)
    - `4` in binary: `00000100` (only the third bit is `1`)
  - **How it works**:
    1. `num & (num - 1)` turns off the **lowest set bit** of the number. For powers of two, this will give `0`.
    2. So, for `num` to be a power of two, this expression must return `0`, but only if `num > 0`.

### 🚀 Time and Space Complexity:

- **Time Complexity**: `O(1)` — This is a constant-time operation.
- **Space Complexity**: `O(1)` — No additional space is required.

### ✅ Benefits:

- **Extremely fast** and works perfectly with binary representations.
- **No floating-point errors** as there are no operations involving floating-point numbers.

### ⚠️ Downsides:

- **Bitwise operators** can be a bit tricky to understand if you're not familiar with binary operations. The readability might not be as high for beginners.

---

# 📊 Comparison Table:

| Solution                      | Time Complexity | Space Complexity | Speed        | Readability                      | Recommended Use                                   |
| ----------------------------- | --------------- | ---------------- | ------------ | -------------------------------- | ------------------------------------------------- |
| `checkPowerOfTwoUsingLog`     | O(1)            | O(1)             | ✅ Fast      | ✅ Easy to understand            | Ideal for small inputs or teaching basic concepts |
| `checkPowerOfTwoUsingBitwise` | O(1)            | O(1)             | ✅ Very Fast | ⚠️ Slightly harder to understand | Best for performance-critical applications        |

---

# 🚀 Final Recommendation:

1. **For ease of use** and **understanding** (especially in an educational context), the **logarithmic approach** (`checkPowerOfTwoUsingLog`) works fine. It's simple, easy to reason about, and gets the job done.
2. **For performance** and handling large numbers, the **bitwise approach** (`checkPowerOfTwoUsingBitwise`) is ideal because:
   - It’s fast.
   - It avoids any floating-point rounding issues.
   - It’s a **constant time** operation that doesn’t depend on the magnitude of the number.

### 📌 Conclusion:

- **Use `checkPowerOfTwoUsingLog`** for general applications or when simplicity is key.
- **Use `checkPowerOfTwoUsingBitwise`** for performance-sensitive or production environments where handling large numbers is crucial.
