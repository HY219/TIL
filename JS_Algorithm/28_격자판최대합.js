function solution(input) {
  const lines = input.trim().split("\n");
  const N = Number(lines[0]);
  const arr = lines.slice(1, N + 1).map((line) => line.split(" ").map(Number));

  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum = 0;
    for (let j = 0; j < N; j++) {
      sum += arr[i][j];
      if (maxSum < sum) {
        maxSum = sum;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    sum = 0;
    for (let j = 0; j < N; j++) {
      sum += arr[j][i];
      if (maxSum < arr[j][i]) {
        maxSum = arr[j][i];
      }
    }
  }

  sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[i][i];
    if (maxSum < sum) {
      maxSum = sum;
    }
  }

  sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[N - 1 - i][i];
    if (maxSum < sum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

const input = `5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
`;

console.log(solution(input));
