function solution(input) {
  const lines = input.trim().split("\n");
  const N = Number(lines[0]);
  const arr = lines[1].split(" ").map(Number);

  let answer = "";
  let number = 0;

  for (let x of arr) {
    let result = 0;
    let flag = 1;

    while (x) {
      number = x % 10;
      result = result * 10 + number;
      x = parseInt(x / 10);
    }

    if (result === 1) {
      flag = 0;
    }

    for (let i = 2; i < result; i++) {
      if (result % i === 0) {
        flag = 0;
        break;
      }
    }

    if (flag) {
      answer += result + " ";
    }
  }

  return answer;
}

const input = `9
32 55 62 20 250 370 200 30 100`;

console.log(solution(input));
