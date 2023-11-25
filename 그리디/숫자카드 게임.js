// fs 모듈을 사용하여 파일을 동기적으로 읽어옴
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

// 첫 번째 줄의 값을 nm에, 나머지를 arr에 할당
let [nm, ...arr] = input;

// nm을 공백으로 분리하여 n과 m으로 구분하고, arr의 각 요소를 숫자 배열로 변환
let [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((v) => v.split(' ').map((v) => +v));

// 주어진 문제를 해결하는 함수
function solution(n, m, arr) {
  let result = 0;
  // arr 배열의 각 요소에 대해 반복
  for (const cur of arr) {
    // 현재 배열에서 가장 작은 값 찾기, 그리고 현재 결과값과 비교하여 더 큰 값 선택
    result = Math.max(result, Math.min(...cur));
  }
  // 최종 결과 반환
  return result;
}

// 함수를 호출하고 결과를 출력
console.log(solution(n, m, arr));
