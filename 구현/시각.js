// 시각
// 하루는 86,400초이다. 즉 00시 00분 00초 ~ 23시 59분 59초까지는 86,400가지의 경우의 수가 존재.
// 문제가 모든 시각중에서 3이 하나라도 포함되는 경우의 수를 모두 구하면 되기때문에, 단순하게 1씩 증가해보면서 3이 포함되어 있는지 확인해보면 된다.
const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim();

let n = Number(input);

function solution(n) {
  let count = 0;
  // h = 시간, m = 분, s = 초
  for (let h = 0; h <= n; h++) {
    for (let m = 0; m <= 59; m++) {
      for (let s = 0; s <= 59; s++) {
        const time = `${h}${m}${s}`;
        if (time.includes('3')) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(solution(n));
