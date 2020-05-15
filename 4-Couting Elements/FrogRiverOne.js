/*
For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5.
 This is the earliest time when leaves appear in every position across the river.

*/

function solution(X, A) {
    let times = {}
    
    for (var second = 0; second < A.length; second++) {
        var position = A[second]
        if (position > X) continue;
        if (times[position] === undefined || times[position] > second) {
            times[position] = second
        }
    }
    
    let maxTime = 0
    for (var i = 1; i < X + 1; i++) {
        if (times[i] === undefined) {
            return -1;
        } else if (maxTime < times[i]) {
            maxTime = times[i]
        }
    }
    
    return maxTime;
}