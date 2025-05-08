function solution(input) {
  let answer = "YES";
  const string = input.toLowerCase().replace(/[^a-z]/g, ""); //^는 부정입니다.(즉, 소문자가 아닌것은 제거)
  if (string.split("").reverse().join("") !== string) {
    return "NO";
  }
  return answer;
}

const input = `found7, time: study; Yduts; emit, 7Dnuof`;

console.log(solution(input));
