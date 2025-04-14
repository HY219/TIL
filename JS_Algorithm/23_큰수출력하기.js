function solution(input) {
  const lines = input.trim().split("\n");
  const n = lines[0];
  const arr = lines[1].split(" ").map(Number);

  let answer = arr[0].toString();

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      answer += " " + arr[i + 1].toString();
    }
  }

  return answer;
}

const input = `6
7 3 9 5 6 12
`;
console.log(solution(input));
