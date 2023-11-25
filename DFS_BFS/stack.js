const stack = [];

// 스택에 값 추가
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(1);

// 스택의 맨 위 값 제거
stack.pop();

// 스택에 값 추가
stack.push(1);
stack.push(4);

// 스택의 맨 위 값 제거
stack.pop();

// 현재 스택 출력
console.log(stack);

// 스택을 역순으로 출력
console.log(stack.reverse());
