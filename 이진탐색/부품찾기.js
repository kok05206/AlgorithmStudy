// 부품찾기

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력값 설정
let [n, arr, m, req] = input;
n = +n;
m = +m;
arr = arr.split(' ').map((v) => +v);
req = req.split(' ').map((v) => +v);

const binarySearch = (arr, target, start, end) => {
  const sorted = arr.sort((a, b) => a - b); // 오름차순으로 정렬.

  if (start > end) {
    // 시작인덱스가 끝 인덱스보다 크면 종료.
    return -1;
  }
  // 미드값
  const mid = ~~((start + end) / 2);

  if (target === sorted[mid]) {
    // 미드값과 타겟이 같다면 바로 출력
    return mid;
  } else if (target < sorted[mid]) {
    // 미드값이 타겟보다 크다면
    return binarySearch(arr, target, start, mid - 1); // end를 미드 앞으로 이동.
  } else {
    return binarySearch(arr, target, mid + 1, end); // 반대면 start + 1
  }
};

function solution(n, m, arr, req) {
  let ans = '';
  for (const target of req) {
    // 비교 시작
    if (binarySearch(arr, target, 0, n - 1) !== -1)
      ans += 'yes '; //해당 부품이 존재하면 yes출력
    else ans += 'no '; // 없으면 no출력
  }
  return ans;
}

console.log(solution(n, m, arr, req));
