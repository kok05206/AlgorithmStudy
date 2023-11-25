// 1로 만들기

// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// 입력값을 파일에서 읽어와서 문자열로 저장
let input = fs.readFileSync('./input.txt').toString().trim();
// 입력값을 정수로 변환하여 변수 n에 저장
const n = +input;
// DP(Dynamic Programming)를 위한 배열 초기화
const dp = [...Array(n + 1).fill(0)];

// DP 과정 수행
for (let i = 2; i < n + 1; i++) {
  // 현재의 수에서 1을 빼는 경우
  dp[i] = dp[i - 1] + 1;
  // 현재의 수가 2로 나누어 떨어지는 경우
  if (i % 2 === 0) {
    // 현재까지의 값과 (현재 수를 2로 나눈 수의 값 + 1) 중에서 작은 값으로 갱신
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  // 현재의 수가 3으로 나누어 떨어지는 경우
  if (i % 3 === 0) {
    // 현재까지의 값과 (현재 수를 3으로 나눈 수의 값 + 1) 중에서 작은 값으로 갱신
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  // 현재의 수가 5로 나누어 떨어지는 경우
  if (i % 5 === 0) {
    // 현재까지의 값과 (현재 수를 5로 나눈 수의 값 + 1) 중에서 작은 값으로 갱신
    dp[i] = Math.min(dp[i], dp[i / 5] + 1);
  }
}

// 최종 갱신된 최솟값을 리턴하는 함수 정의
function solution(n) {
  return dp[n];
}

// 결과 출력
console.log(solution(n));
