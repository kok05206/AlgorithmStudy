// 왕실의 나이트
// 수평으로 두 칸 + 수직으로 한 칸
// 수직으로 두 칸 + 수평으로 한 칸
const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim();

// 아스키 코드로 변환
const x = input.charCodeAt(0) - 97 + 1;
const y = +input[1];

function solution(x, y) {
  // 이동할 수 있는 좌표
  const DIR = [
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
  ];
  // 이동횟수를 세어줄 카운트
  let count = 0;
  for (let i = 0; i < 8; i++) {
    const nx = x + DIR[i][0];
    const ny = y + DIR[i][1];
    // 벗어난 경우는 제외.
    if (nx < 1 || nx > 8 || ny < 1 || ny > 8) {
      continue;
    }
    // 카운트 증가
    count++;
  }

  return count;
}

console.log(solution(x, y));
