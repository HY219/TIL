function solution(input) {
  let answer = "";
  let countStr = input[0];
  let arr = input.split("\n");

  for (i = 1; i <= countStr - 1; i++) {
    if (arr[i].length < arr[i + 1].length) {
      answer = arr[i + 1];
    } else {
      answer = arr[i];
    }
  }

  return answer;
}

let input = `5
teacher
time
student
beautiful
good`;

console.log(solution(input));
