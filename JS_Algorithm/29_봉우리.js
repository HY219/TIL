function solution(input) {
  let lines = input.trim().split("\n");
  let N = Number(lines[0]);
  let arr = lines.splice(1, N).map((line) => line.split(" ").map(Number));

  let answer = 0;
  let fullArr = Array.from({ length: N + 2 }, () =>
    Array.from({ length: N + 2 }, () => 0)
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      fullArr[i + 1][j + 1] = arr[i][j];
    }
  }

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      if (
        fullArr[i][j] > fullArr[i][j - 1] &&
        fullArr[i][j] > fullArr[i][j + 1] &&
        fullArr[i][j] > fullArr[i - 1][j] &&
        fullArr[i][j] > fullArr[i + 1][j]
      ) {
        answer++;
      }
    }
  }

  return answer;
}

const input = `5
5 3 7 2 3
3 7 1 6 1
7 2 5 3 4
4 3 6 4 1
8 7 3 5 2
`;

console.log(solution(input));
