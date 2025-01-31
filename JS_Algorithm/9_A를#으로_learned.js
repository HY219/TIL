function solution(str) {
  let answer = ""; // "" 로 초기화 해줘야한다. // 그렇지 않으면 undefinedB#N#N# 이라는 결과가 출력된다.

  for (let x of str) {
    if (x === "A") answer += "#";
    else answer += x;
  }

  return answer;
}

const str = "BANANA";
console.log(solution(str));
