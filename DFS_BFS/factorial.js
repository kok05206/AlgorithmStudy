// 반복문으로 구현
const factorial_Iterative = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// 재귀 함수로 구현
const factorialRecursive = (n) => {
  if (n < 2) return 1;
  return n * factorialRecursive(n - 1);
};

console.log(factorial_Iterative(5));
console.log(factorial_Iterative(5));
