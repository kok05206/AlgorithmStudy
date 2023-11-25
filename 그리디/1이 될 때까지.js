// 1이 될 때까지

// fs 모듈을 사용하여 파일을 동기적으로 읽어옴
const fs = require('fs');
// 입력값을 파일에서 읽어와서 문자열로 저장
let input = fs.readFileSync('./tc.txt').toString().trim();

// 입력 문자열을 공백을 기준으로 분리하여 숫자로 변환한 후 n과 k에 할당
let [n, k] = input.split(' ').map((v) => +v);

// 주어진 문제를 해결하는 함수
function solution(n, k) {
  let result = 0;

  // n이 1보다 큰 동안 반복
  while (n > 1) {
    // n이 k로 나누어 떨어지면 나누기 연산 수행
    if (n % k === 0) {
      n /= k;
    } else {
      // 그렇지 않으면 1을 빼기 연산 수행
      n--;
    }
    // 연산 횟수 증가
    result++;
  }

  // 최종 결과 반환
  return result;
}

// 함수를 호출하고 결과를 출력
console.log(solution(n, k));
