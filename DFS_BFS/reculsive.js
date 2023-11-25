// 재귀 함수 정의
const recursive = (i) => {
  // 종료 조건: i가 10이면 함수 종료
  if (i === 10) return;

  // 현재 재귀 함수 정보 출력
  console.log(`${i}번째 재귀 함수에서 ${i + 1}번째 재귀 함수를 호출합니다.`);

  // 다음 재귀 함수 호출
  recursive(i + 1);

  // 재귀 함수 종료 후 메시지 출력
  console.log(`${i}번째 재귀 함수를 종료합니다.`);
};

// 재귀 함수 호출
recursive(1);
