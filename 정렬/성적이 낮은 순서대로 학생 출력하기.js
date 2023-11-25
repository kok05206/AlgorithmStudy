// 성적이 낮은 순서로 학생 출력하기
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 입력 받기
let [n, ...arr] = input;
const students = arr.map((v) => v.replace('\n', '').split(' '));

function solution(n, students) {
  const sortedNames = students
    .sort((a, b) => a[1] - b[1])
    .map((student) => student[0]);

  return sortedNames.join(' ');
}

console.log(solution(n, students));
