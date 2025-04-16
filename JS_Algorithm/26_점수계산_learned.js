function solution(input) {
  const lines = input.trim().split("\n");
  const N = lines[0];
  const arr = lines[1].split(" ").map(Number);

  let answer = 0;
  let cnt = 0;

  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }

  return answer;
}

const input = `10
1 0 1 1 1 0 0 1 1 0
`;

console.log(solution(input));
