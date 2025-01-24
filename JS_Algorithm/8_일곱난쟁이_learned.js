function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0); // 누적 값

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1); // 뒤에 위치하는 인덱스를 먼저 제거하면,
        arr.splice(i, 1); // 이전에 위치하는 인뎃그를 제거하는 작업에는 영향을 미치지 않음.
      }
    }
  }

  return answer;
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
