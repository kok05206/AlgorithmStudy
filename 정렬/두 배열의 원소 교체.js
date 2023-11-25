// 두 배열의 원소 교체
// A는 오름차순으로 정렬하고 B는 내림차순으로 정렬하여 인덱스 값을 비교하여, A < B인경우 K번 교체 해서 A의 인덱스의 최댓값을 구해주면 된다.

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력값 받기.
let [nk, A, B] = input;
const [n, k] = nk.split(' ');
A = A.replace('\r', '')
  .split(' ')
  .map((v) => +v);
B = B.replace('\r', '')
  .split(' ')
  .map((v) => +v);

// 정렬하는 부분
function solution(n, k, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  // 인덱스 값을 비교해서 바꿔주는 과정.
  for (let i = 0; i < k; i++) {
    if (A[i] < B[i]) {
      [A[i], B[i]] = [B[i], A[i]];
    }
  }
  // A의 최댓값 구하는 과정.
  return A.reduce((a, b) => a + b);
}

console.log(solution(n, k, A, B));
