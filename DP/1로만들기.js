// 1로 만들기
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();
// 입력값
const n = +input;
// 배열 초기화
const dp = [...Array(n + 1).fill(0)];

// dp 과정
for (let i = 2; i < n + 1; i++) {
  // 현재의 수에서 1을 빼는 경우
  dp[i] = dp[i - 1] + 1;
  // 현재의 수가 2로 나누어 떨어지는 경우
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  // 현재의 수가 3으로로 나누어 떨어지는 경우
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  // 현재의 수가 5로 나누어 떨어지는 경우
  if (i % 5 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 5] + 1);
  }
}
// 갱신된 최솟값을 리턴
function solution(n) {
  return dp[n];
}

console.log(solution(n));
