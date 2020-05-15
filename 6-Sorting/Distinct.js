/*
Write a function

function solution(A);

that, given a zero-indexed array A consisting of N integers,
 returns the number of distinct values in array A.

Assume that:

N is an integer within the range [0..100,000]; 
each element of array A is an integer within the range [−1,000,000..1,000,000]. 
For example, given array A consisting of six elements such that:

 A[0] = 2    A[1] = 1    A[2] = 1
 A[3] = 2    A[4] = 3    A[5] = 1
the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

*/

function solution(A) {
    var map = {}
    for (var i in A) {
        if (!map[A[i]]) {
            map[A[i]] = true
        }
    }
    return Object.keys(map).length
}