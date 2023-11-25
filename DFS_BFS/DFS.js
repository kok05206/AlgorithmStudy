// DFS함수 정의
const dfs = (graph, v, visited) => {
  // 1. 탐색 시작 노드 방문 처리
  visited[v] = true;
  console.log(v);

  // 2. 탐색 노드의 인접 노드 확인
  for (const adjacentNode of graph[v]) {
    // 방문하지 않은 인접 노드에 대해 재귀적으로 DFS 호출
    if (!visited[adjacentNode]) {
      dfs(graph, adjacentNode, visited);
    }
  }
};

// 각 노드가 연결된 정보
let graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

// 각 노드가 방문된 정보
let visited = new Array(9).fill(false);

// DFS 함수 호출
dfs(graph, 1, visited);
