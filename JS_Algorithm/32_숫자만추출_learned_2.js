function solution(input) {
  let number = 0;

  for (let i of input) {
    if (!isNaN(i)) number = number * 10 + Number(i);
  }

  return number;
}

const input = `g000en2T0s8eSoft`;

console.log(solution(input));
