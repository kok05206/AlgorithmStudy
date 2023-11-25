function solution(n, m, k, arr) {
  arr.sort((a, b) => b - a);
  const first = arr[0];
  const second = arr[1];

  let result = 0;
  for (let i = 0, tmp = 0; i < m; i++) {
    if (tmp === k) {
      result += second;
      tmp = 0;
    } else {
      result += first;
      tmp++;
    }
  }
  return result;
}
