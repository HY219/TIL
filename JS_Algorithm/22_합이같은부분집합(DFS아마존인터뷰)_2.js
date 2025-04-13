function solution(arr) {
  let answer = "NO";
  let n = arr.length;
  let ch = Array.from({ length: n + 1 }, () => 0);
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });

  function DFS(v) {
    if (answer === "NO") {
      if (v === n + 1) {
        let subsetSum = 0;
        let restSum = 0;
        for (let i = 1; i <= n; i++) {
          if (ch[i] === 1) {
            subsetSum += arr[i];
          }
        }
        restSum = total - subsetSum;
        if (subsetSum === restSum) {
          answer = "YES";
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
console.log(solution(array));
// 서로소인 부분집합의 합이 같은 경우 true를 반환
