function solution(s) {
  let answer = "";

  for (let x of s) {
    let num = x.charCodeAt(); // ASCII 코드로 변환
    if (num >= 97 && num <= 122)
      answer += String.fromCharCode(num - 32); // 대문자로 변환
    else answer += x;
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
