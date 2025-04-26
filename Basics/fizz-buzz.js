var fizzBuzz = function (n) {
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
  const fizzBuzzUsingArrayConstructor = (num) => {
    return Array.from({ length: n }, (_, i) => {
      i += 1;
      let str = "";
      if (i % 3 === 0) str += "Fizz";
      if (i % 5 === 0) str += "Buzz";
      console.log(i, i % 3 === 0, i % 5 === 0, str);
      return str || `${i}`;
    });
  };
  console.log(
    `fizzBuzzUsingArrayConstructor: `,
    fizzBuzzUsingArrayConstructor(n)
  );
  console.log(
    `fizzBuzzUsingArrAndBeginningCondition: `,
    fizzBuzzUsingArrAndBeginningCondition(n)
  );
  console.log(`fizzBuzzUsingString: `, fizzBuzzUsingString(n));
};
fizzBuzz(16);
