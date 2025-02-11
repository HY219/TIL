function solution(str) {
  let regexp = /[A-Z]/g;
  let answer = str.match(regexp).length;

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
