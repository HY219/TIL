function solution(input) {
  const lines = input.trim().split("\n");
  const N = lines[0];
  const a = lines[1].split(" ").map(Number);
  const b = lines[2].split(" ").map(Number);

  for (let i = 0; i < N; i++) {
    if (a[i] === b[i]) {
      console.log("D");
    } else if (a[i] === 2 && b[i] === 1) {
      console.log("A");
    } else if (a[i] === 1 && b[i] === 3) {
      console.log("A");
    } else if (a[i] === 3 && b[i] === 2) {
      console.log("A");
    } else {
      console.log("B");
    }
  }
}

const input = `5
2 3 3 1 3
1 1 2 2 3
`;

solution(input);
