// 떡볶이 떡 만들기
// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// input.txt 파일을 읽어와 개행 문자('\n')를 기준으로 문자열을 나누고 배열로 저장
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// input 배열의 첫 번째 요소를 [nm, items]에 할당
// nm은 떡의 개수(n)와 요청한 떡의 길이(m)를 공백을 기준으로 나누어 저장한 배열
// items는 각 떡의 길이를 공백을 기준으로 나누어 저장한 배열
let [nm, items] = input;

// 배열 구조 분해를 사용하여 n과 m을 정수로 변환하여 할당
const [n, m] = nm.split(' ').map((v) => +v);

// items 배열의 각 요소를 정수로 변환하여 다시 items에 할당
items = items.split(' ').map((v) => +v);
let start = 0; // 이진탐색 시작 범위 초기화
let end = Math.max(...items); // 이진탐색 끝 범위 초기화

let result = 0; // 최종 결과 값 초기화

// 이진 탐색 시작
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 중간 값 계산
  let total = 0; // 잘린 떡의 길이 합 초기화

  // 각 떡의 길이에 대해 잘린 떡의 길이 합을 계산
  for (let i = 0; i < items.length; i++) {
    if (items[i] > mid) {
      // 현재 떡의 길이가 중간 값보다 크면 잘린 길이를 합산
      total += items[i] - mid;
    }
  }

  // 잘린 떡의 길이 합이 요청한 떡의 길이보다 작다면
  // 더 많이 자르도록 범위를 좁히기 위해 end를 mid - 1 로 업데이트
  if (total < m) {
    end = mid - 1;
  } else {
    // 크다면 결과값을 저장하고
    // 최대값을 찾기 위해 start를 mid + 1 로 업데이트
    result = mid;
    start = mid + 1;
  }
}

// 최종 결과 출력
console.log(result); // 15
