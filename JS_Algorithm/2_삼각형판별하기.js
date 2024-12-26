function solution(a, b, c) {
  let answer;
  let longest;
  let shortSticks;

  if (a < b) {
    longest = a;
    shortSticks = b + c;
  } else {
    longest = b;
    shortSticks = a + c;
  }

  if (c < longest) {
    longest = c;
    shortSticks = a + b;
  }

  if (longest < shortSticks) {
    answer = "YES";
  } else {
    answer = "NO";
  }

  return answer;
}

console.log(solution(6, 7, 11));
