// 두 배열의 원소 교체
// A는 오름차순으로 정렬하고 B는 내림차순으로 정렬하여 인덱스 값을 비교하여, A < B인경우 K번 교체 해서 A의 인덱스의 최댓값을 구해주면 된다.

// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// input.txt 파일을 읽어와 개행 문자('\n')를 기준으로 문자열을 나누고 배열로 저장
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력값 받기
let [nk, A, B] = input;
const [n, k] = nk.split(' ');
A = A.replace('\r', '')
  .split(' ')
  .map((v) => +v); // A 배열 초기화
B = B.replace('\r', '')
  .split(' ')
  .map((v) => +v); // B 배열 초기화

// 정렬하고 값을 비교하여 교체하는 함수
function solution(n, k, A, B) {
  // A와 B를 오름차순, 내림차순으로 정렬
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  // A와 B의 각 인덱스에 해당하는 값 비교 후 교체
  for (let i = 0; i < k; i++) {
    if (A[i] < B[i]) {
      [A[i], B[i]] = [B[i], A[i]]; // A[i]와 B[i] 값을 교체
    }
  }

  // A 배열의 모든 값의 합을 계산하여 반환
  const sumOfA = A.reduce((a, b) => a + b);
  return sumOfA;
}

// 결과 출력
console.log(solution(n, k, A, B));
