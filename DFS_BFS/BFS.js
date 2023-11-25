// BFS함수 정의
const bfs = (graph, start, visited) => {
  const queue = [];
  queue.push(start); // 시작 노드를 큐에 삽입
  visited[start] = true; // 시작 노드를 방문 처리

  // 큐가 빌 때까지 반복하면서 탐색 수행
  while (queue.length !== 0) {
    const currentVertex = queue.shift(); // 큐에서 노드를 하나 꺼내옴
    console.log(currentVertex); // 현재 노드 출력

    // 현재 노드와 연결된 아직 방문하지 않은 노드들을 큐에 삽입
    for (const adjacentVertex of graph[currentVertex]) {
      if (!visited[adjacentVertex]) {
        queue.push(adjacentVertex);
        visited[adjacentVertex] = true; // 방문 처리
      }
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

// 각 노드가 방문된 정보를 저장하는 배열 초기화
let visited = new Array(9).fill(false);

// BFS 함수 호출
bfs(graph, 1, visited); // 1번 노드에서 시작하여 BFS 수행
