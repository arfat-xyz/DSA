/**
 * question
 *
 * edge cases
 *
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  /**
   *
   * @param {*} word1
   * @param {*} word2
   * @returns
   */
  const solutionOne = (word1, word2) => {
    const miniLenth = Math.min(word1.length, word2.length);
    let mergedString = "";
    for (let i = 0; i < miniLenth; i++) {
      mergedString += word1[i] + word2[i];
    }
    if (word1.length > miniLenth) {
      mergedString += word1.slice(miniLenth);
    }
    if (word2.length > miniLenth) {
      mergedString += word2.slice(miniLenth);
    }
    return mergedString;
  };
  /**
   *
   * @param {*} word1
   * @param {*} word2
   * @returns
   */
  const solutionTwo = (word1, word2) => {
    let mergedString = "",
      i = 0;
    while (word1.length > i || word2.length > i) {
      if (word1.length > i) {
        mergedString += word1[i];
      }
      if (word2.length > i) {
        mergedString += word2[i];
      }
      i++;
    }
    return mergedString;
  };
  console.time(`solutionOne`);
  console.log(`Solution One: `, solutionOne(word1, word2));
  console.timeEnd(`solutionOne`);
  console.time(`solutionTwo`);
  console.log(`Solution Two: `, solutionTwo(word1, word2));
  console.timeEnd(`solutionTwo`);
  console.log(`--------------------`);
};
mergeAlternately(`abc`, `pqr`);
mergeAlternately(`ab`, `pqrs`);
mergeAlternately(`abcd`, `pq`);
