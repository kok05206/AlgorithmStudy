// 간단한 정렬 문제.
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
// 입력값
let [n, ...arr] = input;
// 리스트
arr = arr.map((v) => Number(v.replace('\r', '')));

// 함수 동작
function solution(n, arr) {
  return arr.sort((a, b) => b - a).join(' ');
}

console.log(solution(n, arr));
