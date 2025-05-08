function solution(input) {
  let answer = "";
  const number = input.replace(/[^\d]/g, "");
  if (number[0] == 0) {
    answer = number.split("").slice(1).join(""); // 오답 // 0이 여러개일 경우 오답 출력됨
  }
  return answer;
}

const input = `g000en2T0s8eSoft`;

console.log(solution(input));
