function solution(input) {
  let number = "";

  for (let i of input) {
    if (!isNaN(i)) number += i;
  }

  return parseInt(number);
}

const input = `g000en2T0s8eSoft`;

console.log(solution(input));
