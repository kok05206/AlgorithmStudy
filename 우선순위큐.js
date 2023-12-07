// 우선순위 큐 클래스 정의
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

// 우선순위 큐의 사용 예시
const pq = new PriorityQueue(); // 우선순위 큐 객체 생성
pq.push(3); // 원소 추가
pq.push(5);
pq.push(2);
pq.pop(); // 최소값 추출
pq.push(6);
pq.push(1);
pq.pop();

// 우선순위 큐가 비어있지 않은 동안 반복하여 원소 추출 및
while (!pq.empty()) {
  console.log(pq.pop());
}
