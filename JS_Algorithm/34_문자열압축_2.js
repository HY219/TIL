function solution(input) {
  let answer = [];
  let cnt = 1;
  s = s + " ";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      cnt++;
    } else {
      answer.push(input[i]);
      if (cnt !== 1) {
        answer.push(cnt);
      }
      cnt = 1;
    }
  }

  answer = answer.join("");

  return answer;
}

const input = `KKHSSSSSSSE`;

console.log(solution(input));

// input[i], input[i+1] 을 비교
// answer을 배열로 두고 값 구함
