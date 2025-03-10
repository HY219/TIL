function solution(s) {
  let answer = [];
  let inputArray = s.split("\n");
  let countWords = inputArray[0];

  for (i = 1; i <= countWords; i++) {
    if (!answer.includes(inputArray[i])) {
      answer += inputArray[i];
      answer += "\n";
    }
  }

  return answer;
}

let str = `5
good
time
good
time
student`;

console.log(solution(str));
