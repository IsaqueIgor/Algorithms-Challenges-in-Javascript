/*
Find the median of two sorted arrays

eg. 

arr1 = aaabcccdeefgg

fnrc (arr1) = bdf
*/

function fnrc(arr) {
  const obj = {};

  for (let elem of arr) {
    obj[elem] = obj[elem] + 1 || 1;
  }

  for (let elem of arr) {
    if (obj[elem] === 1) {
      return elem;
    }
  }

  return obj;
}

var test1 = 'aaabccedd'; //b
var test2 = 'abcdf'; //a
var test3 = 'abcadfdddb'; //c
console.log(fnrc(test2));
