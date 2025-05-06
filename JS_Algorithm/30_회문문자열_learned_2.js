function solution(input) {
  let answer = "YES";
  input = input.toLowerCase();
  let len = input.length;

  if (input.split("").reverse().join("") !== input) {
    return "NO";
  }

  return answer;
}

const input = `goooG`;

console.log(solution(input));
