function solution(input) {
  const lines = input.trim().split("\n");
  const n = lines[0];
  const arr = lines[1].split(" ").map(Number);

  let answer = 1;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }

  return answer;
}

const input = `8
130 135 148 140 145 150 150 153
`;
console.log(solution(input));
