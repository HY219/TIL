function solution(n) {
  let pencil = 12;
  let pencilDozens;

  if (n % pencil === 0) {
    pencilDozens = Number((n / pencil).toFixed(0));
  } else {
    pencilDozens = Number((n / pencil).toFixed(0)) + 1;
  }

  return pencilDozens;
}

console.log(solution(25));
