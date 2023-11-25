const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v); // n, m 입력
const graph = arr.map((v1) => v1.split('').map((v2) => +v2)); // 그래프 입력.

// 상 하 좌 우
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
// 큐
let que = [];
function bfs(x, y) {
  // 초기 좌표를 담아둔다.
  que.push([x, y]);

  // 큐가 빌 때까지 반복
  while (que.length !== 0) {
    const [x, y] = que.shift();

    // 현재위치에서 상 하 좌 우 확인.
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      // 공간의 범위를 벗어난 경우는 무시한다.
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }
      // 벽인 경우에도 무시한다.
      if (graph[nx][ny] === 0) {
        continue;
      }
      // 해당 노드를 처음 방문하는 경우에만 최단 거리를 기록해준다.
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        que.push([nx, ny]);
      }
    }
  }
  // 가장 오른쪽 아래까지의 최단 거리를 반환해준다.(시작 좌표가 (1,1)이기 때문에 n-1, m-1)
  return graph[n - 1][m - 1];
}

console.log(bfs(0, 0));
