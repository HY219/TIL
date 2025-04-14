function solution(arr) {
  let answer = arr[0].toString();

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      answer += " " + arr[i + 1].toString();
    }
  }

  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
