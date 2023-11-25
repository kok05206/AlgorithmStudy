// 왕실의 나이트
// 수평으로 두 칸 + 수직으로 한 칸
// 수직으로 두 칸 + 수평으로 한 칸
// fs 모듈을 사용하여 파일을 동기적으로 읽어옴
let input = fs.readFileSync('./tc.txt').toString().trim();

// 입력 문자열의 첫 번째 문자를 아스키 코드로 변환하여 x에, 두 번째 문자를 숫자로 변환하여 y에 할당
const x = input.charCodeAt(0) - 97 + 1;
const y = +input[1];

// 나이트의 이동 가능한 경우의 수를 계산하는 함수
function solution(x, y) {
  // 이동할 수 있는 좌표
  const DIR = [
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
  ];
  // 이동횟수를 세어줄 카운트
  let count = 0;

  // 모든 이동 가능한 방향에 대해 확인
  for (let i = 0; i < 8; i++) {
    const nx = x + DIR[i][0];
    const ny = y + DIR[i][1];

    // 벗어난 경우는 제외
    if (nx < 1 || nx > 8 || ny < 1 || ny > 8) {
      continue;
    }

    // 이동 가능한 경우의 수 증가
    count++;
  }

  // 최종적으로 이동 가능한 경우의 수를 반환
  return count;
}

// 함수를 호출하고 결과를 출력
console.log(solution(x, y));
