function solution(input) {
  const lines = input.trim().split("\n");
  const N = Number(lines[0]);
  const arr = lines[1].split(" ").map(Number);

  let answer,
    maxNum = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0,
      tmp = x;

    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10); //parseInt 사용 가능
    }

    if (sum > maxNum) {
      maxNum = sum;
      answer = x;
    } else if (sum === maxNum) {
      if (x > answer) answer = x;
    }
    // 아래의 경우는 answer의 초기값이 undefined이기 때문에 올바른 비교가 안되어서 문제 발생.
    // if (maxNum <= sum && answer < x) {
    //   maxNum = sum;
    //   answer = x;
    // }
  }

  return answer;
}

const input = `7
128 460 603 40 521 137 123`;

console.log(solution(input));
