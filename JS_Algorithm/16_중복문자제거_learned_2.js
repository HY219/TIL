// (활용) "k" 문자의 개수 세기
function solution(s) {
  let answer = 0;
  let pos = s.indexOf("k");

  while (pos !== -1) {
    answer++;
    pos = s.indexOf("k", pos + 1);
  }

  return answer;
}

let str = "ksekkset";
console.log(solution(str));
