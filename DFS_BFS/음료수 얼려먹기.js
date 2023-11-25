const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v); // n, m 입력
const graph = arr.map((v1) => v1.split('')); // 그래프 입력.

// dfs 구현
function dfs(x, y) {
  // 범위를 벗어나는 경우에는 즉시 종료.
  if (x < 0 || x >= n || y < 0 || y >= m) {
    return false;
  }
  // 만약 방문하지 않은 노드라면
  if (graph[x][y] === '0') {
    // 방문 처리
    graph[x][y] = '1';
    // 상 하 좌 우의 위리를 재귀적으로 호출하여 확인.
    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    return true;
  }
  return false;
}

let count = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // 현재 위치에서 dfs 수행
    if (dfs(i, j) === true) {
      count++;
    }
  }
}
console.log(count);
