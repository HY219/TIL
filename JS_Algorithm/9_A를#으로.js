function solution(str) {
  let answer;

  for (i in str) {
    if (str[i] === "A") {
      str[i].replace("A", "#");
    }
  }
  answer = str;

  return answer;
}

const str = "BANANA";
console.log(solution(str));
