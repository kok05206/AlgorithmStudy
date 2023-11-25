// 반복문으로 팩토리얼 구현
const factorialIterative = (n) => {
  let result = 1;

  // 2부터 n까지 반복하면서 곱셈 수행
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  // 최종 결과 반환
  return result;
};

// 반복문으로 구현한 팩토리얼 함수 호출 및 출력
console.log(factorialIterative(5));
// 출력 결과: 120

///////////////////////////////////

// 재귀 함수로 팩토리얼 구현
const factorialRecursive = (n) => {
  // 종료 조건: n이 1 이하이면 1 반환
  if (n < 2) return 1;

  // n과 n-1의 곱셈 결과에 대해 재귀 호출
  return n * factorialRecursive(n - 1);
};
