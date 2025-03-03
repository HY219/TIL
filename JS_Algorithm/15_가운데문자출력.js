function solution(s) {
  let answer = "";
  let medium = s.length / 2;

  if (s.length % 2 === 0) {
    medium = s.length / 2;
    answer = s[medium];
    answer += s[medium + 1];
  } else {
    medium = s.length / 2 + 1;
    answer = s[medium];
  }

  return answer;
}

let str = "study";

console.log(solution(str));
