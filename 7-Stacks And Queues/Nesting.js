/*
Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

For example, given S = "(()(())())", the function should return 1 and given S = "())",
 the function should return 0, as explained above.

Assume that:

N is an integer within the range [0..1,000,000];
string S consists only of the characters "(" and/or ")".
Complexity:

expected worst-case time complexity is O(N);
*/

function solution(S) {
    let counter = 0;
    
    for (var i = 0; i < S.length; i++) {
        switch(S[i]) {
            case "(":
                counter++;
                break;
            case ")":
                counter--;
                break;
        }
        
        if (counter < 0) return 0
    }
    
    return counter === 0 ? 1 : 0 
}