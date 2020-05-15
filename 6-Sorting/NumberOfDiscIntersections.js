function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var counter = 0, j =0;
    var lower = [];
    var upper = [];
    var size = A.length;
    
    for(let i =0 ; i < size; i++){
        lower[i] = i - A[i];
        upper[i] = i+A[i];
    }
    
    lower.sort((a,b) => (a-b));
    upper.sort((a,b) => (a-b));
    
    for(let i = 0 ; i<size ; i++){
        while( j < size && upper[i] >= lower[j]){
            counter += j-i;
            j++;
        }
        if(counter > 1000000) return -1;
    }
    
    return counter;
}