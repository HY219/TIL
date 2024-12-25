function solution(a, b, c) {
  let answer;

  if (a > b) {
    answer = b;
  } else if (a > c) {
    answer = c;
  } else {
    answer = a;
  }

  if (b > c) {
    answer = c;
  }

  return answer;
}

console.log(solution(6, 5, 11));
