// 파일 시스템 모듈을 불러와서 파일을 동기적으로 읽어와서 문자열로 변환한 후 줄 단위로 나눔
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 첫 줄은 n, m, c 값을 담은 문자열이므로 해당 값을 추출
let [nmc, ...arr] = input;
const [n, m, c] = nmc.split(' ').map((v) => +v);

// 나머지 줄은 간선 정보를 담고 있는데, 각 줄의 공백으로 구분된 값을 2차원 배열로 변환
arr = arr.map((str) => str.split(' ').map((v) => +v));

// 플로이드-와샬 알고리즘을 위한 2차원 배열 초기화
let dist = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

// 간선 정보를 초기화된 2차원 배열에 반영
for (const value of arr) {
  const [u, v, w] = value;
  dist[u][v] = w;
}

// 플로이드-와샬 알고리즘 수행하는 함수 정의
function solution(n, m, c, arr) {
  // 플로이드-와샬 알고리즘 수행
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        // i에서 j로 가는 경로보다 i에서 k를 거쳐 j로 가는 경로가 더 짧으면 갱신
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  // 결과를 담을 변수 초기화
  let count = 0;
  let max = 0;

  // 출발 노드로부터 모든 노드까지의 최단 경로 중에서 최댓값을 찾음
  for (let i = 1; i <= n; i++) {
    // 자기 자신으로의 최단 경로는 0이므로 제외
    if (i !== c) {
      // 최댓값 갱신
      max = Math.max(max, dist[c][i]);
      // 무한대가 아니라면 해당 노드까지의 최단 경로가 존재하므로 count 증가
      if (dist[c][i] !== Infinity) {
        count++;
      }
    }
  }

  // 결과를 배열로 반환
  return [count, max];
}

// 함수 호출 및 결과 출력
console.log(solution(n, m, c, arr));
