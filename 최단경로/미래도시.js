// 미래도시

// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// 파일에서 읽어온 입력값을 개행 문자('\n')을 기준으로 나누고 배열로 저장
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 첫 번째 줄의 값을 nm에, 나머지를 arr에 할당
let [nm, ...arr] = input;
// 첫 번째 줄에서 n과 m을 추출하여 정수로 변환하여 저장
const [n, m] = nm.split(' ').map((v) => +v);
// 마지막 줄에서 x와 k를 추출하여 정수로 변환하여 저장
let [x, k] = arr[m].split(' ').map((v) => +v);
// 마지막 줄을 제외한 나머지 줄의 각 값을 공백을 기준으로 나누어 숫자로 변환한 2차원 배열로 저장
arr.pop();
arr = arr.map((str) => str.split(' ').map((v) => +v));

// 다익스트라 알고리즘을 사용하여 최단 거리 행렬을 구하는 함수
function solution(n, m, x, k, arr) {
  // 최단 거리를 저장할 2차원 배열 초기화
  const d = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
  // 자기 자신으로의 최단 거리는 0으로 초기화
  for (let i = 1; i <= n; i++) d[i][i] = 0;

  // 입력으로 주어진 간선 정보를 최단 거리 배열에 반영
  for (const value of arr) {
    const [u, v] = value;
    d[u][v] = 1;
    d[v][u] = 1;
  }

  // 플로이드-와샬 알고리즘을 사용하여 최단 거리 배열 갱신
  for (let i = 1; i <= n; i++) {
    for (let from = 1; from <= n; from++) {
      for (let to = 1; to <= n; to++) {
        // 자기 자신이거나 출발지와 목적지가 같은 경우는 스킵
        if (i === from || from === to) continue;
        // 기존 최단 거리와 현재 경유지를 거쳐가는 거리를 비교하여 갱신
        d[from][to] = Math.min(d[from][to], d[from][i] + d[i][to]);
      }
    }
  }

  // 출발지에서 경유지 k까지의 거리와 경유지 k에서 목적지 x까지의 거리를 합산하여 반환
  const dist = d[1][k] + d[k][x];
  // 만약 최단 거리가 무한대이면 -1을 반환
  return dist >= Infinity ? -1 : dist;
}

// 함수를 호출하고 결과를 출력
console.log(solution(n, m, x, k, arr));
