function solution(s) {
  let answer,
    max = Number.MIN_SAFE_INTEGER; // 최솟값으로 두기

  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];

console.log(solution(str));
