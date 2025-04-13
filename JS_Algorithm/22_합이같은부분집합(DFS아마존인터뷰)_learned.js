function solution(arr) {
  let answer = "NO",
    flag = 0;
  let n = arr.length;
  let total = arr.reduce((a, b) => a + b, 0);

  function DFS(L, sum) {
    if (L === n) {
      if (flag) return; // flag를 세워서, 더 이상 함수를 실행시킬 필요없을 때 종료하도록 설정
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      } else {
        DFS(L + 1, sum + arr[L]);
        DFS(L + 1, sum);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

let array = [1, 3, 5, 6, 7, 10];
console.log(solution(array));
