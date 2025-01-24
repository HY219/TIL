function solution(arr) {
  let sum = 0;
  let others = 0;

  for (i in arr) {
    sum += arr[i];
  }
  others = sum - 100;

  for (let j = 0; j < arr.length; j++) {
    for (let k = 1 + j; k < arr.length; k++) {
      if (arr[j] + arr[k] === others) {
        arr.splice(j, 1);
        arr.splice(k - 1, 1);
      }
    }
  }
  return arr;
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
