function solution(input) {
  const lines = input.trim().split("\n");
  const N = lines[0];
  const arr = lines[1].split(" ").map(Number);

  let answer = Array.from({ length: N }, () => 1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[j] > arr[i]) {
        answer[i]++;
      }
    }
  }

  return answer;
}

const input = `5
87 89 100 100 100
`;

console.log(solution(input));
