function solution(n) {
  function DFS(L) {
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
      // DFS(L - 1);
    }
  }

  DFS(n);
}

console.log(solution(3));
