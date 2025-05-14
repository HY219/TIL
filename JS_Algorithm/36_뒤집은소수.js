function solution(input) {
  const lines = input.trim().split("\n");
  const N = Number(lines[0]);
  const arr = lines[1].split(" ").map(Number);

  let answer = "";
  let number = 0;

  for (let x of arr) {
    let flag = 1;

    let units = x % 10;
    let tens = parseInt(x / 10) % 10;
    let hundreds = parseInt(x / 100) % 10;

    number = units * 100 + tens * 10 + hundreds;

    number = Number(String(number).split(0).join(""));

    if (number === 1) {
      flag = 0;
    }

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        flag = 0;
        break;
      }
    }

    if (flag) {
      answer += number + " ";
    }
  }

  return answer;
}

const input = `9
32 55 62 20 250 370 200 30 100`;

console.log(solution(input));

// 뒤집은 수가 소수이면 그 소수를 출력. but, 뒤집을 때 0은 제거
