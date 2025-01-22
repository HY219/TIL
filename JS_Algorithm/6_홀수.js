function solution(array) {
  let oddMin;
  let oddSum;
  const oddArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArray.push(array[i]);
    }
  }

  oddSum = oddArray.reduce((a, b) => a + b, 0);
  oddMin = Math.min(...oddArray);

  console.log("홀수의 합 :", oddSum, ", 홀수 중 최솟값 :", oddMin);
}

solution([12, 77, 38, 41, 53, 92, 85]);
