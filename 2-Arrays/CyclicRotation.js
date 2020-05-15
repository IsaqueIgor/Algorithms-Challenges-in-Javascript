/*
For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. 
The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
*/
function solution(A, K) {
    K = K % A.length;
    if (A.length < 2 || K === 0) {
        return A;
    }

    let part = A.splice(A.length - K);
    return part.concat(A);
}