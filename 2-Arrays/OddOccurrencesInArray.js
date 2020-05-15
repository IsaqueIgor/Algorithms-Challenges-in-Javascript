/*

Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.
*/

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    return A.slice(1).reduce(function (odd, current) {
        return odd ^ current;
    }, A[0]);
}