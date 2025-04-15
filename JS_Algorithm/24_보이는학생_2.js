function solution(input) {
  const lines = input.trim().split("\n");
  const n = lines[0];
  const arr = lines[1].split(" ");

  let length = arr[0];
  let answer = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] > length) {
      length = arr[i];
      answer++;
    }
  }

  return answer;
}

const input = `8
130 135 148 140 145 150 150 153
`;
console.log(solution(input));
