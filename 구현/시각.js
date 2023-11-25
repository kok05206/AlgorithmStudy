// 시각
// 하루는 86,400초이다. 즉 00시 00분 00초 ~ 23시 59분 59초까지는 86,400가지의 경우의 수가 존재.
// 문제가 모든 시각중에서 3이 하나라도 포함되는 경우의 수를 모두 구하면 되기때문에, 단순하게 1씩 증가해보면서 3이 포함되어 있는지 확인해보면 된다.
// fs 모듈을 사용하여 파일을 동기적으로 읽어옴
const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim();

// 입력된 문자열을 숫자로 변환
let n = Number(input);

// 주어진 범위 내에서 '3'이 포함된 시간의 개수를 계산하는 함수
function solution(n) {
  let count = 0;

  // h = 시간, m = 분, s = 초
  for (let h = 0; h <= n; h++) {
    for (let m = 0; m <= 59; m++) {
      for (let s = 0; s <= 59; s++) {
        // 시간, 분, 초를 이어붙여서 문자열로 만듦
        const time = `${h}${m}${s}`;

        // 만들어진 문자열에 '3'이 포함되어 있으면 count를 증가
        if (time.includes('3')) {
          count++;
        }
      }
    }
  }

  // 최종적으로 '3'이 포함된 시간의 개수를 반환
  return count;
}

// 함수를 호출하고 결과를 출력
console.log(solution(n));
