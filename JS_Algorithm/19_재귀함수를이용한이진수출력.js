function solution(n) {
  function DFS(L) {
    if (Math.floor(L / 2) === 1) {
      console.log(1);
      console.log(L % 2);
    } else {
      DFS(Math.floor(L / 2));
      console.log(L % 2);
    }
  }

  DFS(n);
}

solution(11);
