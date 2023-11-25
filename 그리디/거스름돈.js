// 거스름돈
// 동전의 종류를 나타내는 상수 배열
const COIN_TYPES = [500, 100, 50, 10];

/**
 * 거스름돈 계산 함수
 * n - 거스름돈의 총액
 * count - 필요한 동전의 최소 개수
 */
function calculateChange(n) {
  let count = 0;

  // 각 동전 단위에 대해 반복문 수행
  for (const coin of COIN_TYPES) {
    // 현재 동전 단위로 거슬러줘야 하는 동전의 개수 계산
    count += Math.floor(n / coin); // Math.floor: 소수점 이하 버림
    n %= coin; // 현재 동전 단위로 거스름돈을 계산하고 남은 잔액을 다시 계산
  }

  return count; // 필요한 동전의 최소 개수 반환
}

console.log(calculateChange(1260)); // 결과 출력
