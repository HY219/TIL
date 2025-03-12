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

solution(3); // 1 2 3
