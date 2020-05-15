/*
For example, you are given integers K = 3, M = 5 and array A such that:

  A[0] = 2
  A[1] = 1
  A[2] = 5
  A[3] = 1
  A[4] = 2
  A[5] = 2
  A[6] = 2
The array can be divided, for example, into the following blocks:

[2, 1, 5, 1, 2, 2, 2], [], [] with a large sum of 15;
[2], [1, 5, 1, 2], [2, 2] with a large sum of 9;
[2, 1, 5], [], [1, 2, 2, 2] with a large sum of 8;
[2, 1], [5, 1], [2, 2, 2] with a large sum of 6.
The goal is to minimize the large sum. In the above example, 6 is the minimal large sum.
*/
function solution(K, M, A) {
    var begin = A.reduce((a, v) => (a + v), 0)
    begin = parseInt((begin+K-1)/K, 10);
    var maxA = Math.max(A);
    if (maxA > begin) begin = maxA;

    var end = begin + M + 1;
    var res = 0;

    while(begin <= end) {
        var mid = (begin + end) / 2;
        var sum = 0;
        var block = 1;
        for (var ind in A) {
            var a = A[ind];
            sum += a;
            if (sum > mid) {
                ++block;
                if (block > K) break;
                sum = a;
            }
        }
        if (block > K) {
            begin = mid + 1;
        } else {
            res = mid;
            end = mid - 1;
        }
    }
    return res;
}