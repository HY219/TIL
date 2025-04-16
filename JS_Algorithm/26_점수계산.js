function solution(input) {
  const lines = input.trim().split("\n");
  const N = lines[0];
  const arr = lines[1].split(" ").map(Number);

  let answer = arr[0];
  let sequence = arr[0];

  for (let i = 1; i < N; i++) {
    if (arr[i] === 0) {
      sequence = 0;
    } else {
      sequence++;
      answer += sequence;
    }
  }

  return answer;
}

const input = `10
1 0 1 1 1 0 0 1 1 0
`;

console.log(solution(input));
