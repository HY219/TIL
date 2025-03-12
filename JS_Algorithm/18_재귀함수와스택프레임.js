function solution(n) {
  let answer = 1;

  while (n > 1) {
    answer = answer * n;
    n--;
  }

  return answer;
}

console.log(solution(3));
