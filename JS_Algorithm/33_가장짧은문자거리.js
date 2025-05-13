function solution(input) {
  let s = input.split(" ")[0];
  let t = input.split(" ")[1];
  let answer = "";

  let arr = s.split("e");

  for (let i in arr) {
    let number = 0;
    for (let j in arr[i]) {
      number++;
      console.log(arr[i][j]);
      answer += parseInt(number) + " ";
    }
    answer += "0 ";
  }
  // 0 1 0 0 0 1 0 0 0 0 1
  // 1 0 1 2 1 0 1 2 2 1 0

  return answer;
}

const input = `teachermode e`;

console.log(solution(input));

// 답 구하지 않은 문제
// 고민한 부분
