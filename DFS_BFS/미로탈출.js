// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// input.txt 파일을 읽어와 개행 문자('\n')를 기준으로 문자열을 나누고 배열로 저장
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력부분
const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v); // n, m 입력
const graph = arr.map((v1) => v1.split('').map((v2) => +v2)); // 그래프 입력.

// 이동할 수 있는 방향을 정의
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
// BFS 탐색을 위한 큐
let que = [];

// BFS 함수 정의
function bfs(x, y) {
  // 초기 좌표를 큐에 추가
  que.push([x, y]);

  // 큐가 빌 때까지 반복
  while (que.length !== 0) {
    const [x, y] = que.shift();

    // 현재 위치에서 상 하 좌 우 확인
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      // 공간의 범위를 벗어난 경우는 무시
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }

      // 벽인 경우는 무시
      if (graph[nx][ny] === 0) {
        continue;
      }

      // 해당 노드를 처음 방문하는 경우에만 최단 거리를 기록하고 큐에 추가
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        que.push([nx, ny]);
      }
    }
  }

  // 도착 지점까지의 최단 거리 반환 (시작 좌표가 (0, 0)이므로 n-1, m-1)
  return graph[n - 1][m - 1];
}

// BFS 함수 호출하고 결과 출력
console.log(bfs(0, 0));
