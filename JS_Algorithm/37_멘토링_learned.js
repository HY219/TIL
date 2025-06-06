function solution(input) {
  let lines = input.trim().split("\n");
  let firstLine = lines[0].split(" ");
  let person = Number(firstLine[0]);
  let testsCount = Number(firstLine[1]);
  let tests = lines
    .splice(1, testsCount)
    .map((line) => line.split(" ").map(Number));

  let answer = 0;

  for (let i = 1; i <= person; i++) {
    for (let j = 1; j <= person; j++) {
      let count = 0;
      for (let k = 0; k < testsCount; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < person; s++) {
          if (tests[k][s] === i) pi = s;
          if (tests[k][s] === j) pj = s;
        }
        if (pi < pj) count++;
      }
      if (count === testsCount) answer++;
    }
  }
  return answer;
}

const input = `4 3
3 4 1 2
4 3 2 1
3 1 4 2
`;
console.log(solution(input));
