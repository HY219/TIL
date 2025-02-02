function solution(strs, str) {
  let answer = 0;
  for (let i of strs) {
    if (i === str) {
      answer += 1;
    }
  }

  return answer;
}

let strs = "COMPUTERPROGRAMMING";
let str = "R";
console.log(solution(strs, str));
