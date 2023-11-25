// 상하좌우
// fs 모듈을 사용하여 파일을 동기적으로 읽어옴
const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

// 첫 번째 줄은 공간의 크기를 나타내는 n, 두 번째 줄은 이동 방향을 나타내는 문자열 arr
let [n, arr] = input;

// n을 숫자로 변환
n = Number(n);

// 이동 방향을 나타내는 문자열을 공백을 기준으로 분리
arr = arr.split(' ');

// 주어진 이동 방향에 따라 상하좌우로 이동한 결과 위치를 반환하는 함수
function solution(n, arr) {
  // 상하좌우 이동 방향 정의
  const DIR = {
    L: [0, -1], // 왼쪽으로 이동시 y 좌표가 감소
    R: [0, 1], // 오른쪽으로 이동시 y 좌표가 증가
    U: [-1, 0], // 위로 이동시 x 좌표가 감소
    D: [1, 0], // 아래로 이동시 x 좌표가 증가
  };

  // 초기 시작점
  let point = [1, 1];

  // 주어진 이동 방향 배열을 순회하면서 이동
  for (const d of arr) {
    const [x, y] = DIR[d]; // 현재 이동 방향에 따른 좌표 이동값
    const nx = point[0] + x; // 새로운 x 좌표
    const ny = point[1] + y; // 새로운 y 좌표

    // 공간을 벗어나는 경우에는 무시한다.
    if (nx < 1 || nx > n || ny < 1 || ny > n) continue;

    // 새로운 위치로 이동
    point[0] = nx;
    point[1] = ny;
  }

  // 최종 결과 위치를 반환
  return point;
}

// 함수를 호출하고 결과를 출력
console.log(solution(n, arr));
