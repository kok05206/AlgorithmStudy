const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력값
const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const coins = arr.map((v) => +v); // 화폐단위

// 한 번 계산된 결과를 저장하기 위한 dp테이블 초기화
const d = [...Array(m + 1).fill(Infinity)];

// dp 진행
const dp = (n, m, coins) => {
  d[0] = 0;

  for (const coin of coins) {
    d[coin] = 1;
  }

  for (let i = 1; i <= m; i++) {
    for (const coin of coins) {
      if (i < coin) {
        continue;
      } else {
        d[i] = Math.min(d[i], d[i - coin]) + 1; // i-k원이 존재하는 경우
      }
    }
  }
  // 갱신된 최솟값을 리턴
  return d[m];
};

function solution(n, m, coins) {
  const result = dp(n, m, coins);
  return result === Infinity ? -1 : result; // m원을 만들수 없는경우에는 -1 아니면 result값 리턴
}

console.log(solution(n, m, coins));
