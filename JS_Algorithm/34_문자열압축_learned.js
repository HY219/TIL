function solution(input) {
  let answer = "";
  let cnt = 1;
  input = input + " "; // 중요!

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] === input[i + 1]) {
      cnt++;
    } else {
      answer += input[i];
      if (cnt > 1) {
        answer += String(cnt);
      }
      cnt = 1;
    }
  }

  return answer;
}

const input = `KKHSSSSSSSE`;

console.log(solution(input));

// input[i], input[i+1] 을 비교
// answer을 문자열로 두고 값 구함

/** 중요!
 * 돌리면서 s[i]와 s[i+1]를 비교하면 i가 마지막 문자를 가르킬 때
 * i+1은 없는 인덱스 번호이기 때문에
 * 다른 언어들은 index out of range 에러가 납니다.
 * 자바스크립트는 이런 에러를 내지 않는 굉장히 관대한 언어라 그렇습니다.
 */
