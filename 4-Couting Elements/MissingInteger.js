/*
that, given a non-empty zero-indexed array A of N integers, 
returns the minimal positive integer (greater than 0) that does not occur in A.

For example, given:

  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2
the function should return 5.
*/

function solution(A) {
    // Filter positive
    A = A.filter(i => (i > 0))

    // sort arrays
    A.sort((a, b) => (a - b))

    if (A.length == 1 && A[0] === 1) {
        return 2
    }
    
    if (A[0] !== 1) return 1
    
    for (let i=1; i<A.length; i++) {
        if ((A[i] - A[i-1]) > 1) 
            return A[i-1] + 1
    }
    
    return A[A.lenth -1] + 1
}