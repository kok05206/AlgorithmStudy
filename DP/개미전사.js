// 개미전사
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력값
let [n, arr] = input;
n = +n;
arr = arr.split(' ').map((v) => +v);

// 배열 초기화
const d = [...Array(n + 1).fill(0)];

const dp = (n) => {
  d[0] = arr[0]; // 0은 0
  d[1] = Math.max(arr[0], arr[1]); // 1번째는 0번째 값과 비교해서 큰 값

  for (let i = 2; i < n; i++) {
    d[i] = Math.max(d[i - 1], d[i - 2] + arr[i]); // i-1과 i-2 + 현재창고 중 큰 값
  }

  return d[n - 1]; // 최댓값 반환
};
function solution(n, arr) {
  return dp(n);
}

console.log(solution(n, arr));
