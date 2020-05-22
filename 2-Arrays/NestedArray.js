/*
We will use recursion to solve this problem.
For each element in an array call the callback
If an element is a number then add the value to sum
Else if an element is an array then call the callback recursively.
*/

var nestedArray = [ 1, 2, 3, [4, 5, 6,'abc', [7, 8, 9, []]] ];
var sum = 0;
var count = 0;
var avg = 0;

nestedArray.forEach(function calculateAverage(element) {
        if('number' === typeof element) {
            sum += element;
            count++;
            avg = sum / count;
        }
        if(Array.isArray(element)) {
            element.forEach(calculateAverage);
        }
    }
);

console.log('Sum = ', sum); // 45
console.log('Count = ', count); // 9
console.log('Average = ', avg); // 5