function solution(input) {
  let answer = "YES";
  input = input.toLowerCase();
  let len = input.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (input[i] !== input[len - i - 1]) {
      return "NO";
    }
  }

  return answer;
}

const input = `goooG`;

console.log(solution(input));
