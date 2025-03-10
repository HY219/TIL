function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    // console.log(s[i], i, s.indexOf(s[i]));

    // 해당 문자의 인덱스 번호와 해당 문자가 가지고 있는 최초의 인덱스 번호가 일치할 경우만 추가
    if (i === s.indexOf(s[i])) {
      answer += s[i];
    }
  }

  return answer;
}

let str = "ksekkset";
console.log(solution(str));
