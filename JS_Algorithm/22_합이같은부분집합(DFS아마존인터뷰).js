function solution(arr) {
  let sumArray = [];
  let answer = "NO";
  let n = arr.length;
  let ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (answer === "NO") {
      if (v === n + 1) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
          if (ch[i] === 1) {
            sum += arr[i];
          }
        }
        if (sum > 0) {
          if (sumArray.find((element) => element === sum)) {
            answer = "YES";
          }
          sumArray.push(sum);
          console.log(sumArray);
        }
      } else {
        ch[v] = 1;
        DFS(v + 1);
        ch[v] = 0;
        DFS(v + 1);
      }
    } else {
      return answer;
    }
  }

  DFS(1);
  return answer;
}

let array = [1, 3, 5, 6, 7, 10];
console.log(solution(array)); // wrong solution
// 부분집합들 중에 합이 같은 것이 있을 경우 true를 반환하도록 풂.
// 서로소를 고려하지 않음. (wrong)
