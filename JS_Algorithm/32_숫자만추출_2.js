function solution(input) {
  let number = "";

  for (let i of input) {
    if (!isNaN(i)) {
      if (i != 0 || number.length !== 0) number += i;
    }
  }

  return number;
}

const input = `g000en2T0s8eSoft`;

console.log(solution(input));
