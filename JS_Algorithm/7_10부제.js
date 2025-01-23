function solution(arr) {
  let answer = 0;
  const day = arr[0];
  const carsLastNum = arr[1].map((carLastNum) => carLastNum % 10);

  for (i of carsLastNum) {
    if (i === day) {
      answer += 1;
    }
  }

  return answer;
}

const arr = [3, [25, 23, 11, 47, 53, 17, 33]];

console.log(solution(arr));
