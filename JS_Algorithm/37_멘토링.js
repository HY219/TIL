function solution(input) {
  let lines = input.trim().split("\n");
  let firstLine = lines[0].split(" ");
  let person = Number(firstLine[0]);
  let testsCount = Number(firstLine[1]);
  let tests = lines
    .splice(1, testsCount)
    .map((line) => line.split(" ").map(Number));

  let answer = 0;
  let count = 0;

  for (let i = 1; i <= person; i++) {
    for (let j = 1; j <= person; j++) {
      // 해당 값의 인덱스번호가 다른 값의 인덱스번호보다 항상 작아야 멘토
      for (let k = 1; k <= testsCount; k++) {
        if (
          tests[k - 1].findIndex((e) => e === i) <
          tests[k - 1].findIndex((e) => e === j)
        ) {
          count = 1;
        } else {
          count = 0;
          break;
        }
      }
      answer += count;
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
