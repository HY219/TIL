function solution(array) {
  const answer = Math.min(...array);

  return answer;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
