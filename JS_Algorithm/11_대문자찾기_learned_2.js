function solution(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt(); // 아스키코드로 변환 (ex. A = 65)
    if (num >= 65 && num <= 90) {
      answer++;
    }
  }

  return answer;
}

let str = "KoreaTimeGoodZ";
console.log(solution(str));
