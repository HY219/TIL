function solution(input) {
  let lines = input.trim().split("\n");
  let N = Number(lines[0]);
  let arr = lines.splice(1, N).map((line) => line.split(" ").map(Number));

  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 행 좌표
        let ny = j + dy[k]; // 열 좌표표
        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < N &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) {
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
