//Flat Array
let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [1, 2, 3]]]];
console.log(arr.flat(3));

//Trim
let message = '     Trim this!   ';
console.log(message.trimStart());
console.log(message.trimEnd());
console.log(message.trim());
