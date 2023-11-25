// 전보

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
// 우선순위 큐 구현

// 우선순위 큐를 구현한 PriorityQueue 클래스
class PriorityQueue {
  // 생성자에서 heap을 빈 배열로 초기화
  constructor() {
    this.heap = [];
  }

  // 큐가 비어있는지 확인하는 메서드
  empty() {
    return this.heap.length === 0;
  }

  // 큐의 맨 앞에 있는 원소를 반환하는 메서드
  peek() {
    return this.heap[0];
  }

  // 큐에 원소를 추가하는 메서드
  push(data) {
    // heap 배열에 원소를 추가
    this.heap.push(data);

    // 새로 추가된 원소를 heap의 적절한 위치로 이동시키는 과정
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = ~~((i - 1) / 2); // 부모 노드의 인덱스 계산
      // 부모 노드의 값이 현재 노드의 값보다 작으면 반복 종료
      if (this.heap[parent] <= this.heap[i]) {
        break;
      }
      // 부모와 현재 노드의 값을 교환
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent; // 현재 위치를 부모 위치로 갱신
    }
  }

  // 큐에서 원소를 제거하고 반환하는 메서드
  pop() {
    // 큐가 비어있으면 undefined 반환
    if (this.empty()) return;

    // 최상단과 최하단의 원소를 교환
    const value = this.peek();
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop(); // 가장 마지막에 있는 원소를 제거
    this._heapify(); // heap을 재구성
    return value; // 제거된 원소 반환
  }

  // heap을 재구성하는 내부 메서드
  _heapify() {
    const x = this.peek();
    const n = this.heap.length;
    let cur = 0;

    // 현재 노드가 자식을 가지는 동안 반복
    while (2 * cur + 1 < n) {
      const leftChild = 2 * cur + 1;
      const rightChild = leftChild + 1;
      // 오른쪽 자식이 존재하고, 오른쪽 자식이 왼쪽 자식보다 작을 경우 오른쪽 자식 선택
      const smallerChild =
        rightChild < n && this.heap[rightChild] < this.heap[leftChild]
          ? rightChild
          : leftChild;

      // 현재 노드의 값이 선택된 자식보다 크면 swap
      if (x > this.heap[smallerChild]) {
        [this.heap[cur], this.heap[smallerChild]] = [
          this.heap[smallerChild],
          this.heap[cur],
        ];
        cur = smallerChild; // 현재 위치를 선택된 자식의 위치로 갱신
      } else {
        break; // 더 이상 조건을 만족하지 않으면 종료
      }
    }
  }
}

// PriorityQueue 클래스를 사용하는 예시
const pq = new PriorityQueue();
pq.push(3);
pq.push(5);
pq.push(2);
pq.pop();
pq.push(6);
pq.push(1);
pq.pop();

// 큐가 비어있지 않은 동안 원소를 꺼내어 출력
while (!pq.empty()) {
  console.log(pq.pop());
}

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
    if (d[cur] < dist) continue;

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

// 결과 출력
console.log(solution(n, m, c, arr));
