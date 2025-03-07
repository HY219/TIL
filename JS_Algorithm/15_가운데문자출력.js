function solution(s) {
  let answer = "";
  let medium;

  if (s.length % 2 === 0) {
    medium = s.length / 2;
    answer += s[medium - 1];
    answer += s[medium];
  } else {
    medium = parseInt(s.length / 2); // parseInt가 아닌 Math.floor을 사용하는 것이 더 적합해보임
    answer += s[medium];
  }

  return answer;
}

let str1 = "study";
let str2 = "good";

console.log(solution(str1));
console.log(solution(str2));
