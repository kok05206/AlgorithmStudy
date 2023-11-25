// 개미전사

// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// 입력값을 파일에서 읽어와서 개행 문자('\n')를 기준으로 문자열을 나누어 배열로 저장
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력값을 배열에서 추출하여 변수에 저장
let [n, arr] = input;
// n은 창고의 개수, arr은 각 창고에 저장된 식량의 양을 나타내는 배열
n = +n;
arr = arr.split(' ').map((v) => +v);

// DP(Dynamic Programming)를 위한 배열 초기화
const d = [...Array(n + 1).fill(0)];

// DP 함수 정의
const dp = (n) => {
  d[0] = arr[0]; // 0번째 창고까지의 최대 식량 양은 첫 번째 창고의 양과 동일
  d[1] = Math.max(arr[0], arr[1]); // 1번째 창고까지의 최대 식량 양은 첫 번째와 두 번째 창고 중 큰 양

  // 2번째 창고부터 n-1번째 창고까지 반복하여 최대 식량 양 갱신
  for (let i = 2; i < n; i++) {
    // i번째 창고까지의 최대 식량 양은 (i-1번째까지의 최대 양)과 (i-2번째까지의 최대 양 + 현재 창고의 양) 중 큰 값
    d[i] = Math.max(d[i - 1], d[i - 2] + arr[i]);
  }

  return d[n - 1]; // 마지막 창고까지의 최대 식량 양 반환
};

// 최종 결과를 반환하는 함수 정의
function solution(n, arr) {
  return dp(n);
}

// 결과 출력
console.log(solution(n, arr));
