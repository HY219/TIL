function solution(input) {
  const lines = input.trim().split("\n");
  const N = lines[0];
  const a = lines[1].split(" ").map(Number);
  const b = lines[2].split(" ").map(Number);

  let answer = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D" + " ";
    else if (a[i] === 1 && b[i] === 3) answer += "A" + " ";
    else if (a[i] === 2 && b[i] === 1) answer += "A" + " ";
    else if (a[i] === 3 && b[i] === 2) answer += "A" + " ";
    else answer += "B" + " ";
  }

  return answer;
}

const input = `5
2 3 3 1 3
1 1 2 2 3
`;

console.log(solution(input));
