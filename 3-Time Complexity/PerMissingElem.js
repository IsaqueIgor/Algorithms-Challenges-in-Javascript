function solution(A) {
    if (A.length === 0) return 1
    
    var actualSum = A.reduce(function (actualSum, i) {
        return actualSum + i;
    })
    
    var requiredSum = (A.length + 1) * (A.length + 2) / 2;
    
    return requiredSum - actualSum;
}