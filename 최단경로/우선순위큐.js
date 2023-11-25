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
      if (this.heap[parent] <= this.heap[i]) break;
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
