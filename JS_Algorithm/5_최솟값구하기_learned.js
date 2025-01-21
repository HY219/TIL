function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER; // 안정적인 정수 중 가장 큰 값

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
