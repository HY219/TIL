function solution(input) {
  let lines = input.trim().split("\n");
  let N = Number(lines[0]);
  let arr = lines.splice(1, N).map((line) => line.split(" ").map(Number));

  let answer = 0;
  let top = 0;
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < 4; k++) {
        if (
          i + dx[k] == -1 ||
          j + dy[k] == -1 ||
          i + dx[k] == N ||
          j + dy[k] == N ||
          arr[i + dx[k]][j + dy[k]] < arr[i][j]
        ) {
          top++;
        }
      }
      if (top === 4) {
        answer++;
      }
      top = 0;
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
