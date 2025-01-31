function solution(str) {
  let answer;

  answer = str.replaceAll("A", "#"); // str.replace(/A/g, "#") // 정규표현식을 사용할 수 있다.

  return answer;
}

const str = "BANANA";
console.log(solution(str));
