// 성적이 낮은 순서로 학생 출력하기

// fs 모듈을 사용하여 파일 시스템에 접근하는 데 사용됨
const fs = require('fs');
// input.txt 파일을 읽어와 개행 문자('\n')를 기준으로 문자열을 나누고 배열로 저장
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 첫 번째 줄의 값을 n에, 나머지를 arr에 할당
let [n, ...arr] = input;
// 각 학생의 정보를 배열로 변환
const students = arr.map((v) => v.replace('\n', '').split(' '));

function solution(n, students) {
  // 학생들을 성적을 기준으로 오름차순으로 정렬
  const sortedNames = students
    .sort((a, b) => a[1] - b[1])
    .map((student) => student[0]);

  // 정렬된 학생 이름들을 문자열로 합쳐서 반환
  return sortedNames.join(' ');
}

// 결과 출력
console.log(solution(n, students));
