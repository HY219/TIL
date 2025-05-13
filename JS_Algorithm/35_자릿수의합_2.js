function solution(input) {
  const lines = input.trim().split("\n");
  const N = Number(lines[0]);
  const arr = lines[1].split(" ").map(Number);

  let answer = 0;
  let maxNum = 0;

  for (let x of arr) {
    let units = x % 10;
    let tens = parseInt(x / 10) % 10; //Math.floor 사용 가능
    let hundreds = parseInt(x / 100) % 10; //Math.floor 사용 가능
    sum = units + tens + hundreds;

    if (maxNum <= sum && answer < x) {
      maxNum = sum;
      answer = x;
    }
  }

  return answer;
}

const input = `7
128 460 603 40 521 137 123`;

console.log(solution(input));
