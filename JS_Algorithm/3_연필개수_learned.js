function solution(n) {
  let pencil = 12;
  let pencilDozens = Math.ceil(n / pencil);

  return pencilDozens;
}

console.log(solution(25));
