function solution(s) {
  let answer;
  //console.log(s.indexOf("time")); //1

  answer = s.filter(function (v, i) {
    // filter는 참이 되는 요소(v)만 return
    return s.indexOf(v) === i; // if (s.indexOf(v) === i) return true;
  });

  return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
