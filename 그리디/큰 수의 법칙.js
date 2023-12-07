// // 큰 수의 법칙

// //  n - 배열의 크기
// //  m - 덧셈 연산의 총 횟수
// //  k - 같은 인덱스의 수를 연속으로 더할 수 있는 최대 횟수
// //  arr - 입력된 배열
// //  result - 큰 수의 법칙을 적용한 결과
// let input = function solution(n, m, k, arr) {
//   // 배열을 내림차순으로 정렬
//   arr.sort((a, b) => b - a);
//   // 정렬된 배열에서 가장 큰 값과 두 번째로 큰 값 가져오기
//   const first = arr[0];
//   const second = arr[1];

//   let result = 0;
//   // m번의 덧셈 연산 수행
//   for (let i = 0, tmp = 0; i < m; i++) {
//     // k번째 연산일 때 second 값을 더하고 tmp 초기화
//     if (tmp === k) {
//       result += second;
//       tmp = 0;
//     } else {
//       // 그 외의 경우에는 first 값을 더하고 tmp 증가
//       result += first;
//       tmp++;
//     }
//   }
//   // 최종 결과 반환
//   return result;
// };
// console.log(solution(n, m, k, arr));

const fs = require('fs');

// 파일에서 입력값을 읽어오기
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

// N, M, K를 공백을 기준으로 구분하여 입력 받기
let [n, m, k] = input[0].split(' ').map(Number);

// N개의 수를 공백을 기준으로 구분하여 입력 받기
let data = input[1].split(' ').map(Number);

data.sort((a, b) => b - a); // 입력 받은 수들 정렬하기
let first = data[0]; // 가장 큰 수
let second = data[1]; // 두 번째로 큰 수

// 가장 큰 수가 더해지는 횟수 계산
let count = Math.floor(m / (k + 1)) * k;
count += m % (k + 1);

let result = 0;
result += count * first; // 가장 큰 수 더하기
result += (m - count) * second; // 두 번째로 큰 수 더하기

console.log(result); // 최종 답안 출력
