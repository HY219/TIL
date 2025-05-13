function solution(input) {
  let string = input.split(" ")[0];
  let text = input.split(" ")[1];
  let answer = [];
  let p = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== text) {
      p++;
      answer.push(p);
    } else {
      p = 0;
      answer.push(p);
    }
  }
  p = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== text) {
      p++;
      if (answer[i] > p) {
        answer.splice(i, 1, p);
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

// 팁 알고 품

// 왼쪽에서 오른쪽으로 e가 아닐 경우에, p++값 array에 push
// 오른쪽에서 왼쪽으로 e가 아닐 경우에, p++값 array에 이미 들어있는 값과 비교 후 더 작으면 교체
// (e일 경우는, p=0 값 array에 push)
