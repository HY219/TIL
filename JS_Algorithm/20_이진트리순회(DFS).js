function solution(v) {
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      console.log(v); // 1 2 4 5 3 6 7 //전위순회
      DFS(v * 2);
      /* console.log(v); // 4 2 5 1 6 3 7 //중위순회 */
      DFS(v * 2 + 1);
      /* console.log(v); // 4 5 2 6 7 3 1 //후위순회 */
    }
  }

  DFS(v);
}

console.log(solution(1));
