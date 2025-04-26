var isPowerOfTwo = function (n) {
  const checkPowerOfTwoUsingLog = (num) => {
    if (num <= 0) return false;
    const base2Value = Math.log2(num);
    return Number.isInteger(base2Value);
  };

  const checkPowerOfTwoUsingBitwise = (num) => {
    return num > 0 && (num & (num - 1)) === 0;
  };
  console.log(` checkPowerOfTwoUsingLog: `, checkPowerOfTwoUsingLog(n));
  console.log(` checkPowerOfTwoUsingBitwise: `, checkPowerOfTwoUsingBitwise(n));
};
isPowerOfTwo(64);
