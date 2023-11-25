// 부품찾기

// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// input.txt 파일을 읽어와 개행 문자('\n')를 기준으로 문자열을 나누고 배열로 저장
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력값 받기
let [n, arr, m, req] = input;
n = +n; // 부품의 개수
m = +m; // 요청 개수
arr = arr.split(' ').map((v) => +v); // 가게에 있는 부품 번호 배열
req = req.split(' ').map((v) => +v); // 손님이 요청한 부품 번호 배열

// 이진 탐색 함수 정의
const binarySearch = (arr, target, start, end) => {
  // 주어진 배열을 오름차순으로 정렬
  const sorted = arr.sort((a, b) => a - b);

  if (start > end) {
    // 시작 인덱스가 끝 인덱스보다 크면 종료하고 -1 반환
    return -1;
  }

  // 중간값 계산
  const mid = ~~((start + end) / 2);

  if (target === sorted[mid]) {
    // 중간값이 타겟과 같다면 해당 인덱스 반환
    return mid;
  } else if (target < sorted[mid]) {
    // 중간값이 타겟보다 크다면 왼쪽 부분에서 이진 탐색 재귀 호출
    return binarySearch(arr, target, start, mid - 1);
  } else {
    // 중간값이 타겟보다 작다면 오른쪽 부분에서 이진 탐색 재귀 호출
    return binarySearch(arr, target, mid + 1, end);
  }
};

// 문제 해결 함수 정의
function solution(n, m, arr, req) {
  let ans = '';

  // 각 요청에 대해 이진 탐색 수행
  for (const target of req) {
    if (binarySearch(arr, target, 0, n - 1) !== -1)
      ans += 'yes '; // 해당 부품이 존재하면 'yes'를 결과 문자열에 추가
    else ans += 'no '; // 존재하지 않으면 'no'를 결과 문자열에 추가
  }

  return ans;
}

// 결과 출력
console.log(solution(n, m, arr, req));
