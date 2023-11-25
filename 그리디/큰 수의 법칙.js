/**
 * 큰 수의 법칙을 적용한 결과를 계산하는 함수
 *  n - 배열의 크기
 *  m - 덧셈 연산의 총 횟수
 *  k - 같은 인덱스의 수를 연속으로 더할 수 있는 최대 횟수
 *  arr - 입력된 배열
 * result - 큰 수의 법칙을 적용한 결과
 */
function solution(n, m, k, arr) {
  // 배열을 내림차순으로 정렬
  arr.sort((a, b) => b - a);
  // 정렬된 배열에서 가장 큰 값과 두 번째로 큰 값 가져오기
  const first = arr[0];
  const second = arr[1];

  let result = 0;
  // m번의 덧셈 연산 수행
  for (let i = 0, tmp = 0; i < m; i++) {
    // k번째 연산일 때 second 값을 더하고 tmp 초기화
    if (tmp === k) {
      result += second;
      tmp = 0;
    } else {
      // 그 외의 경우에는 first 값을 더하고 tmp 증가
      result += first;
      tmp++;
    }
  }
  // 최종 결과 반환
  return result;
}
