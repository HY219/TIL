function solution(strs, str) {
  let answer = strs.split(str).length; // [ '', 'COMPUTE', 'P', 'OG', 'AMMING', '' ]

  return answer - 1;
}

let strs = "RCOMPUTERPROGRAMMINGR";
let str = "R";
console.log(solution(strs, str));
