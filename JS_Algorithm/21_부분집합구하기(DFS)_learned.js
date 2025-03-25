function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0); // 0의 값으로 채워진 n+1길이의 배열 생성.

  function DFS(v) {
    if (v === n + 1) {
      // 트리 생성 완료 후 접근
      let tmp = ""; // 부분집합 출력을 위해 생성성
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) {
          tmp += i + " ";
        }
      }
      console.log(tmp); // 부분집합
      if (tmp.length > 0) {
        // 공집합 제거
        answer.push(tmp.trim()); //trim : 문자열 양 끝의 공백 제거
      }
    } else {
      ch[v] = 1; //ch에 v라는 원소를 포함시킨다. 그 값은 1이다.
      DFS(v + 1);
      ch[v] = 0; //ch에 v라는 원소를 포함시키지 않는다.
      DFS(v + 1);
    }
  }

  DFS(1);
  return answer;
}

// 부분집합 2^n-1

console.log(solution(3));
