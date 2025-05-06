function solution(input) {
  let answer = "";
  let arr = input.toLowerCase().split("");
  let n = input.length;
  let flag = 1;

  for (let i = 0; i < n / 2; i++) {
    if (arr[i] !== arr[n - i - 1]) {
      flag = 0;
    }
    if (flag === 0) {
      answer = "NO";
      break;
    }
  }

  if (flag === 1) {
    answer = "YES";
  }
  return answer;
}

const input = `goooG`;

console.log(solution(input));
