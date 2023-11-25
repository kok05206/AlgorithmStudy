const queue = [];

// 큐에 값 추가
queue.push(5);
queue.push(2);
queue.push(3);
queue.push(1);

// 큐의 맨 앞 값 제거
queue.shift();

// 큐에 값 추가
queue.push(1);
queue.push(4);

// 큐의 맨 앞 값 제거
queue.shift();

// 현재 큐 출력
console.log(queue);

// 큐을 역순으로 출력
console.log(queue.reverse());
