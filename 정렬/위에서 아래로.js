// 위에서 아래로

// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// input.txt 파일을 읽어와 개행 문자('\n')를 기준으로 문자열을 나누고 배열로 저장
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 첫 번째 줄의 값을 n에, 나머지를 arr에 할당
let [n, ...arr] = input;
// 배열 arr의 각 요소에 대해서 \r (캐리지 리턴)을 빈 문자열로 대체하고,
// 그 값을 숫자로 변환하여 다시 arr에 할당
arr = arr.map((v) => +v.replace('\r', ''));

// 함수 동작
function solution(n, arr) {
  // 배열을 내림차순으로 정렬
  const sortedArr = arr.sort((a, b) => b - a);
  // 정렬된 배열을 문자열로 합쳐서 반환
  return sortedArr.join(' ');
}

// 출력
console.log(solution(n, arr));
// 출력 결과
(input) => 3, (arr) => [15, 27, 12];
결과: 27, 15, 12;
