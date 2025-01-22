function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x; // 바로 더하고
      if (x < min) min = x; // 바로 min값 구하기
    }
  }

  answer.push(sum);
  answer.push(min);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// 홀수 값을 가지는 배열을 따로 생성할 필요없이,
// 홀수 값을 체크하는 if문 내에서, 합을 구하는 동시에 최솟값을 구하면 됩니다.
