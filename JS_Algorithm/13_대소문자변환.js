function solution(str) {
  let answer = "";

  for (let x of str) {
    x === x.toLowerCase()
      ? (answer += x.toUpperCase())
      : (answer += x.toLowerCase());
  }

  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
