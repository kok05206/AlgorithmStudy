const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let [nm, items] = input;
const [n, m] = nm.split(' ').map((v) => +v);
items = items.split(' ').map((v) => +v);

let start = 0; // 이진탐색 첫 번째 값
let end = Math.max(...items); // 이진탐색 마지막 값

let result = 0; // 결과 값
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 중간 값
  let total = 0; // 잘린 떡의 합
  for (let i = 0; i < items.length; i++) {
    if (items[i] > mid) {
      total += items[i] - mid;
    }
  }
  // 잘린 떡의 합이 요청한 떡의 길이보다 작다면 범위를 줄여야하므로 end를 mid -1 로 바꿔준다.
  if (total < m) {
    end = mid - 1;
    // 크다면 값을 저장하고 최대값을 찾기 위해서 start를 mid + 1 로 바꿔준다.
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result); // 15
