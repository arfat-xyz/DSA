/**
 * 
 * @param {*} low 
 * @param {*} high 
 * @returns 
 */
var countOdds = function (low, high) {
  if (high === 0) return 0;
  if (high === 1) return 1;


  /**
   * 
   * @param {*} newLow 
   * @param {*} newHigh 
   * @returns 
   */
  const countOddsUsingForLoop = (newLow, newHigh) => {
    if (newLow % 2 === 0) {
      newLow++;
    }
    if (newHigh % 2 === 0) {
      newHigh--;
    }
    const allOdds = [];
    for (let i = low; i <= newHigh; i += 2) {
      allOdds.push(i);
    }
    return allOdds.length;
  };

  /**
   * 
   * @param {*} newLow 
   * @param {*} newHigh 
   * @returns 
   */
  const countOddUsingMath = (newLow, newHigh) => {
    if (
      (newLow % 2 === 0 && newHigh % 2 === 0) ||
      (newLow % 2 === 1 && newHigh % 2 === 1)
    ) {
      return (newHigh - newLow) / 2 + (newHigh % 2);
    } else {
      return (newHigh - newLow + 1) / 2;
    }
  };

  console.log(`Find odds using math formula: `, countOddUsingMath(low, high));
  console.log(`Find odds using loop: `, countOddsUsingForLoop(low, high));
};

countOdds(1, 99342399);
