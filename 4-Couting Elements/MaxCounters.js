function solution(N, A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let counters = []
    let maxVal = 0
    let lastMax = 0
    
    for (var i = 0; i < N; i++) counters[i] = 0;
    
    for (var j = 0; j < A.length; j++) {
        if (A[j] > N) {
            lastMax = maxVal
        } else {
            let currentMax = Math.max(lastMax, counters[A[j] - 1])
            counters[A[j] - 1] = currentMax + 1
            maxVal = Math.max(counters[A[j] - 1], maxVal)
        }
    }

    for (var l = 0; l < N; l++) {
        counters[l] = Math.max(counters[l], lastMax)
    }
    
    return counters;
}