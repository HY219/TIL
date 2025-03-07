function solution(s) {
  let answer = "";
  let mid = Math.floor(s.length / 2);

  if (s.length % 2 == 1) {
    answer = s.substring(mid, mid + 1); // mid 부터 mid+1 전까지
  } else {
    answer = s.substring(mid - 1, mid + 1);
  }

  return answer;
}

let str1 = "study";
let str2 = "good";

console.log(solution(str1));
console.log(solution(str2));
