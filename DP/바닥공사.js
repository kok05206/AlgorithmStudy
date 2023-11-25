// 바닥공사
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

// 입력값
const n = +input;

// 결괏값이 커지는걸 방지하기 위해서 796,796으로 나눈 나머지를 출력
const DIV = 796796;
// 앞서 계산된 결과를 저장하기 위한 DP배열 초기화
const d = [...Array(n + 1).fill(0)];

// dp 진행
const dp = (n) => {
  d[1] = 1;
  d[2] = 3;
  // 점화식이 ai = {a(i-1) + 2*(a(i-2)) % 796796}
  for (let i = 3; i <= n; i++) {
    d[i] = (d[i - 1] + d[i - 2] * 2) % DIV;
  }

  return d[n];
};

function solution(n) {
  return dp(n);
}

console.log(solution(n));
