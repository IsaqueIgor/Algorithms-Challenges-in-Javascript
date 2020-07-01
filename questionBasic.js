/*
Dada uma lista de numeros inteiros, implemente um algoritimo que encontre um par de numeros que some k
*/

const FindElementsInSum = (k, A) => {
  let result = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = 1; j < A.length; j++) {
      if (A[i] + A[j] === k) {
        result.push(A[i], A[j]);
        return result;
      }
    }
  }

  return 0;
};

console.log(FindElementsInSum(16, [2, 24, 8, 7, 1, 0, 5, 9, 8, 3]));
