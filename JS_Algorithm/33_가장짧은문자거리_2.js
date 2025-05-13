function solution(input) {
  let string = input.split(" ")[0];
  let text = input.split(" ")[1];

  let arr = string.split(text);
  let answer = Array.from({ length: arr.length }, () =>
    Array.from({ length: arr.legnth }, () => 0)
  );

  for (let i = 0; i < arr.length; i++) {
    let number = 1;
    for (let j = 0; j <= Math.floor((arr[i].length - 1) / 2); j++) {
      if (!answer[i][j]) {
        answer[i][j] = number;
      }
      number++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let number = 1;
    for (
      let j = arr[i].length - 1;
      j > Math.floor((arr[i].length - 1) / 2);
      j--
    ) {
      answer[i][j] = number;
      number++;
    }
  }

  answer = answer.join(" 0 ").split(",").join(" ");

  // 0 1 0 0 0 1 0 0 0 0 1
  // 1 0 1 2 1 0 1 2 2 1 0

  return answer;
}

const input = `teachermode e`;

console.log(solution(input));

// 복잡하게 품.
// Math.floor((arr[i].length-1)/2) 이용
