// fs 모듈을 사용하여 파일을 동기적으로 읽어옴
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력부분
/**
 *  n - 지도의 세로 크기
 *  m - 지도의 가로 크기
 *  x - 캐릭터의 초기 X 좌표
 *  y - 캐릭터의 초기 Y 좌표
 *  d - 캐릭터의 초기 방향 (0: 북, 1: 동, 2: 남, 3: 서)
 *  map - 게임 지도
 * count- 캐릭터가 방문한 칸의 수
 */
const [nm, abd, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
let [x, y, d] = abd.split(' ').map((v) => +v);
const map = arr.map((v) => v.split(' ').map((v) => +v));

function solution(n, m, x, y, d, map) {
  // 북동남서 방향을 나타내는 배열
  const DIR = [
    [0, -1], // 북
    [1, 0], // 동
    [0, 1], // 남
    [-1, 0], // 서
  ];

  let visited = Array.from(Array(n), () => Array(m).fill(false)); // 방문 여부를 저장하는 배열 초기화
  visited[x][y] = true; // 초기 위치 방문 표시

  let count = 1; // 칸의 수 (초기 위치 포함)
  let turnTime = 0; // 현재 위치에서 회전한 횟수

  while (1) {
    // 왼쪽으로 회전
    d = d === 0 ? 3 : d - 1;
    let nx = x + DIR[d][0];
    let ny = y + DIR[d][1];

    // 정면에 가보지 않은 칸이 존재하는 경우
    if (!map[nx][ny] && !visited[nx][ny]) {
      visited[nx][ny] = true; // 방문 표시
      x = nx;
      y = ny;
      count++;
      turnTime = 0;
      continue;
    } else {
      // 정면에 가보지 않은 칸이 없거나 바다인 경우
      turnTime++;
    }

    // 네 방향 모두 갈 수 없는 경우
    if (turnTime === 4) {
      nx = x - DIR[d][0];
      ny = y - DIR[d][1];

      // 뒤로 갈 수 있으면 이동
      if (!map[nx][ny]) {
        x = nx;
        y = ny;
        turnTime = 0;
      } else {
        // 뒤가 바다인 경우 종료
        break;
      }
    }
  }

  return count;
}

// 함수를 호출하고 결과를 출력
console.log(solution(n, m, x, y, d, map));
