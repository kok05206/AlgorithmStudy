// 음료수 얼려먹기
// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// input.txt 파일을 읽어와 개행 문자('\n')를 기준으로 문자열을 나누고 배열로 저장
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력으로부터 n, m을 받아옴
const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v); // n, m 입력

// 그래프 정보를 2차원 배열로 저장
const graph = arr.map((v1) => v1.split(''));

// DFS 구현
function dfs(x, y) {
  // 범위를 벗어나는 경우에는 탐색 종료
  if (x < 0 || x >= n || y < 0 || y >= m) {
    return false;
  }

  // 만약 현재 위치가 방문하지 않은 노드(0)라면
  if (graph[x][y] === '0') {
    // 방문 처리
    graph[x][y] = '1';

    // 현재 위치에서 상, 하, 좌, 우로 DFS 탐색을 재귀적으로 수행
    dfs(x - 1, y); // 상
    dfs(x, y - 1); // 좌
    dfs(x + 1, y); // 하
    dfs(x, y + 1); // 우

    // 현재 위치를 시작으로 하는 영역이 존재함을 표시하고 true 반환
    return true;
  }

  // 이미 방문한 노드 이거나 예외인 경우는 false 반환
  return false;
}

let count = 0; // 영역의 개수를 저장하는 변수 초기화

// 모든 위치에서 DFS를 수행하여 영역의 개수를 센다
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // 현재 위치에서 DFS를 수행하고, DFS가 반환하는 값이 true인 경우에만 count 증가
    if (dfs(i, j) === true) {
      count++;
    }
  }
}

// 최종적으로 찾아진 영역의 개수를 출력
console.log(count);
