function isPrime(num) {
  console.log(num);
  if (num === 1) return false;
  //Math.sqrt - 제곱근 구하는 메서드
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true; // 2, 3, 5, 7 이 true로 포함됨. (8번 줄에서)
}

function solution(input) {
  const lines = input.trim().split("\n");
  const N = Number(lines[0]);
  const arr = lines[1].split(" ").map(Number);

  let answer = [];

  for (let x of arr) {
    let res = 0;

    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }

    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

const input = `9
32 55 62 20 250 370 200 30 100`;

console.log(solution(input));
