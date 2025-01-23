function solution(day, arr) {
  let answer = 0;

  for (let x of arr) {
    if (x % 10 === day) answer++; // if문 안에서 계산식으로 간단하게 풀 수 있다는 것을 기억하기!
  }

  return answer;
}

const arr = [25, 23, 11, 47, 53, 17, 33];

console.log(solution(3, arr));
