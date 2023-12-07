// 전보
// 우선순위 큐 선언만.

// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// 파일에서 입력값을 읽어와서 개행 문자('\n')를 기준으로 문자열을 나누고 배열로 저장
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 첫 줄의 값을 n, m, c로 분리하여 변수에 할당
let [nmc, ...arr] = input;
const [n, m, c] = nmc.split(' ').map((v) => +v);
// 2차원 배열로 된 그래프 정보를 담을 배열 초기화
arr = arr.map((str) => str.split(' ').map((v) => +v));

// 최단 거리 정보를 담을 배열 초기화
let d = [...Array(n + 1).fill(Infinity)];

// 다익스트라 알고리즘을 이용한 최단 거리 및 최대 거리 계산 함수
function solution(n, m, c, arr) {
  // 각 노드의 연결 정보를 저장할 그래프 초기화
  let graph = Array.from(Array(n + 1), () => []);
  // 입력으로 주어진 간선 정보를 이용하여 그래프 정보 초기화
  for (const value of arr) {
    const [u, v, dist] = value;
    graph[u].push([v, dist]);
  }

  // 우선순위 큐를 이용한 다익스트라 알고리즘 구현을 위한 우선순위 큐 객체 초기화
  const pq = new PriorityQueue();

  // 시작 노드부터의 거리를 0으로 설정하고 우선순위 큐에 추가
  pq.push([0, c]);
  d[c] = 0;

  // 우선순위 큐가 빌 때까지 반복
  while (!pq.empty()) {
    // 현재 노드와 그까지의 최단 거리를 우선순위 큐에서 꺼냄
    const [dist, cur] = pq.pop();

    // 현재 노드의 최단 거리가 이미 계산된 최단 거리보다 크다면 무시
    if (d[cur] < dist) {
      continue;
    }

    // 현재 노드와 연결된 노드들을 순회
    for (const i of graph[cur]) {
      const node = i[0];
      const cost = dist + i[1];
      // 새로운 최단 거리가 기존의 최단 거리보다 작으면 갱신하고 우선순위 큐에 추가
      if (cost < d[node]) {
        pq.push([cost, node]);
        d[node] = cost;
      }
    }
  }

  // 시작 노드로부터의 최단 거리를 담은 배열에서 첫 번째 값(자기 자신)을 제외하고 복사
  d = d.slice(1);
  // 최단 거리 중 Infinity(도달할 수 없는 노드)를 필터링하여 유효한 값만으로 이루어진 배열 생성
  const count = d.filter((v) => v && v !== Infinity).length;
  // 최단 거리 중 가장 큰 값을 찾아 최대 거리로 설정
  const max = Math.max(...d);

  // 결과로 최단 거리가 유효한 노드의 개수와 최대 거리를 배열로 반환
  return [count, max];
}

// //////////////////////////////////////////////<우선 순위 큐>
class PriorityQueue {
  constructor() {
    this.heap = []; // 힙 배열 초기화
  }

  // 우선순위 큐가 비어있는지 확인하는 메서드
  empty() {
    return this.heap.length === 0;
  }

  // 우선순위 큐의 맨 앞의 원소(최소값)를 확인하는 메서드
  peek() {
    return this.heap[0];
  }

  // 우선순위 큐에 원소를 추가하는 메서드
  push(data) {
    this.heap.push(data); // 배열에 데이터 추가

    let i = this.heap.length - 1;
    // 힙 속성을 유지하기 위해 상향식으로 정렬
    while (i > 0) {
      const parent = ~~((i - 1) / 2); // 현재 노드의 부모 인덱스 계산

      // 부모 노드의 값이 현재 노드의 값보다 작거나 같으면 정렬 완료
      if (this.heap[parent] <= this.heap[i]) {
        break;
      }

      // 부모 노드와 현재 노드의 값을 교환
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent; // 현재 노드를 부모 노드의 위치로 업데이트
    }
  }

  // 우선순위 큐에서 원소를 추출하는 메서드
  pop() {
    if (this.empty()) {
      return; // 큐가 비어있으면 종료
    }

    const value = this.peek(); // 최소값 저장
    // 힙의 맨 끝의 노드와 루트 노드를 교환
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop(); // 힙에서 맨 끝의 노드 제거
    this._heapify(); // 힙 속성을 유지하기 위해 하향식으로 정렬
    return value; // 추출한 최소값 반환
  }

  // 힙을 재조정하여 힙 속성을 유지하는 메서드
  _heapify() {
    const x = this.peek(); // 루트 노드의 값 저장
    const n = this.heap.length; // 힙의 크기 저장
    let cur = 0; // 현재 노드의 인덱스 초기화

    // 현재 노드가 자식 노드를 가지는 동안 반복
    while (2 * cur + 1 < n) {
      const leftChild = 2 * cur + 1; // 왼쪽 자식 노드의 인덱스 계산
      const rightChild = leftChild + 1; // 오른쪽 자식 노드의 인덱스 계산
      const smallerChild =
        rightChild < n && this.heap[rightChild] < this.heap[leftChild]
          ? rightChild
          : leftChild; // 작은 자식 노드의 인덱스 계산

      // 루트 노드의 값이 작은 자식 노드의 값보다 큰 경우 교환
      if (x > this.heap[smallerChild]) {
        [this.heap[cur], this.heap[smallerChild]] = [
          this.heap[smallerChild], // 작은 자식 노드의 값
          this.heap[cur], // 현재 노드의 값
        ];
        cur = smallerChild; // 현재 노드를 작은 자식 노드의 위치로 업데이트
      } else {
        break; // 힙 속성이 만족하면 종료
      }
    }
  }
}

// 결과 출력
console.log(solution(n, m, c, arr));
