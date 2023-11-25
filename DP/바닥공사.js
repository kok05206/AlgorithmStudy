// 효율적인 화폐 구성

// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// 입력값을 파일에서 읽어와서 문자열로 저장
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력값에서 첫 줄을 비구조화 할당하여 변수에 저장
const [nm, ...arr] = input;
// 공백을 기준으로 나누어 정수로 변환하여 변수 n, m에 저장
const [n, m] = nm.split(' ').map((v) => +v);
// 각 화폐의 단위를 정수로 변환하여 배열로 저장
const coins = arr.map((v) => +v);

// 한 번 계산된 결과를 저장하기 위한 dp 테이블 초기화
const d = [...Array(m + 1).fill(Infinity)];

// DP 함수 정의
const dp = (n, m, coins) => {
  d[0] = 0; // 0원을 만드는 경우의 수는 0가지

  // 각 화폐의 단위를 기준으로 초기화
  for (const coin of coins) {
    d[coin] = 1;
  }

  // 화폐 단위를 기준으로 dp 배열 갱신
  for (let i = 1; i <= m; i++) {
    for (const coin of coins) {
      if (i < coin) {
        // 만들려는 금액이 현재 화폐 단위보다 작으면 무시
        continue;
      } else {
        d[i] = Math.min(d[i], d[i - coin] + 1); // i-coin원이 존재하는 경우의 수 갱신
      }
    }
  }
  // 갱신된 최솟값을 반환
  return d[m];
};

// 최종 결과를 반환하는 함수 정의
function solution(n, m, coins) {
  const result = dp(n, m, coins);
  return result === Infinity ? -1 : result; // m원을 만들 수 없는 경우에는 -1, 아니면 결과값 반환
}

// 결과 출력
console.log(solution(n, m, coins));
