function solution(input) {
  let answer = [];
  let p = 1;

  for (let x of input) {
    if (answer[answer.length - 1] !== x) {
      if (p !== 1) {
        answer.push(p);
        p = 1;
      }
      answer.push(x);
    } else {
      p++;
    }
  }

  answer = answer.join("");

  return answer;
}

const input = `KKHSSSSSSSE`;

console.log(solution(input));

// array배열에 먼저 문자값을 push해, 그 값을 이용한 비교

// array배열에 먼저 문자값을 push 후, 존재하면 p++, 존재하지 않으면 p값을 push (초기 p값 = 1, 일단 존재하기 때문)
