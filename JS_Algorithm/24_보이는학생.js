function solution(input) {
  const lines = input.trim().split("\n");
  const n = lines[0];
  const arr = lines[1].split(" ").map(Number);

  const tmp = [arr[0]];

  let answer;

  for (let i = 1; i < n; i++) {
    let tmpLast = tmp[tmp.length - 1];
    if (arr[i] > tmpLast) {
      tmp.push(arr[i]);
    }
  }

  answer = tmp.length;

  return answer;
}

const input = `8
130 135 148 140 145 150 150 153
`;
console.log(solution(input));
