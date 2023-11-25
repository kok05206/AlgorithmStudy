const bfs = (graph, start, visited) => {
  const q = [];
  q.push(start);
  visited[start] = true; // 현재 노드를 방문처리

  // 큐가 빌 때까지 돌리고, 큐에서 하나씩 원소를 뽑아서 출력.
  while (q.length !== 0) {
    const v = q.shift();
    console.log(v);

    // 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입.
    for (const cur of graph[v]) {
      if (!visited[cur]) {
        q.push(cur);
        visited[cur] = true;
      }
    }
  }
};

// 각 노드가 연결된 정보.
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

// 각 노드가 방문된 정보.
let visited = new Array(9).fill(false);

bfs(graph, 1, visited);
