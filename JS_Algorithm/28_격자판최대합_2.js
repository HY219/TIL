function solution(input) {
  const lines = input.trim().split("\n");
  const N = Number(lines[0]);
  const arr = lines.slice(1, N + 1).map((line) => line.split(" ").map(Number));

  let maxSum = 0;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < N; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < N; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    if (maxSum < sum1) {
      maxSum = sum1;
    }
    if (maxSum < sum2) {
      maxSum = sum1;
    }
  }

  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < N; i++) {
    sum1 += arr[i][i];
    sum2 += arr[N - i - 1][i];
  }
  if (maxSum < sum1) {
    maxSum = sum1;
  }
  if (maxSum < sum2) {
    maxSum = sum1;
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
