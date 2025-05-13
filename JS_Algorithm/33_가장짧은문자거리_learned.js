function solution(input) {
  let string = input.split(" ")[0];
  let text = input.split(" ")[1];
  let answer = [];
  let p = 1000;

  for (let x of string) {
    if (x !== text) {
      p++;
      answer.push(p);
    } else {
      p = 0;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== text) {
      p++;
      if (answer[i] > p) {
        answer[i] = Math.min(answer[i], p);
      }
    } else {
      p = 0;
    }
  }

  answer = answer.join(" ");

  return answer;
}

const input = `teachermode e`;

console.log(solution(input));
