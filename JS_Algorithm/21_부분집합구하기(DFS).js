function solution(n) {
  let answer;
  function DFS(v) {
    if (v < n) {
      return;
    } else {
      DFS(v * 2 - 1);
      v++;
      return answer;
    }
  }
  DFS(1);
}

// 부분집합 2^n-1

console.log(solution(3)); // wrong solution
