function solution(str) {
  let answer = "";

  for (let x of str) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x.toLowerCase();
  }

  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
