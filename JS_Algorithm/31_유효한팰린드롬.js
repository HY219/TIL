function solution(input) {
  const string = input.match(/[a-zA-z]/g);
  const lowerString = string.join("").toLowerCase();
  const replaceString = lowerString.split("").reverse().join("");

  if (lowerString === replaceString) {
    return "YES";
  } else {
    return "NO";
  }
}

const input = `found7, time: study; Yduts; emit, 7Dnuof`;

console.log(solution(input));
