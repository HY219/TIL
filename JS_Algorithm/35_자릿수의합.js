function solution(input) {
  const lines = input.trim().split("\n");
  const N = Number(lines[0]);
  const arr = lines[1].split(" ");

  let answer = 0;
  let maxNum = 0;

  for (let i = 0; i < N - 1; i++) {
    let sum = 0;

    for (let j = 0; j < arr[i].length; j++) {
      sum += Number(arr[i][j]);
    }

    if (maxNum <= sum && answer < Number(arr[i])) {
      maxNum = sum;
      answer = Number(arr[i]);
    }
  }

  return answer;
}

const input = `7
128 460 603 40 521 137 123`;

console.log(solution(input));
