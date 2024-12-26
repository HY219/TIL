function solution(a, b, c) {
  let answer = "YES";
  let longest;
  let sum = a + b + c;

  if (a < b) {
    longest = a;
  } else {
    longest = b;
  }

  if (c < longest) {
    longestStick = c;
  }

  if (longest >= sum - longest) {
    answer = "NO";
  }

  return answer;
}

console.log(solution(6, 7, 11));

// 중복되는 부분을 변수를 활용해 간단하게 작성하도록 고민하기!
