//MATH
console.log(Math.floor(5.8)); //Aredonda o numero para Baixo
console.log(Math.ceil(5.8)); //Aredonda o numero para cima
console.log(Math.round(2.3)); //Arredonda o numero para o mais proximo inteiro


//Array
let A = [1,3,5,2,9];
let B = [0,0,2,4,8,10];
let Aduplicados = [ 1, 2, 2, 3, 4,3,4];

console.log(A.slice(2)); //REMOVE DO ARRAY ITENS ATE O INDEX [2]
A = A.concat(B); //juntar 2 ou mais Arrays
A.sort((a,b) => (a-b)); console.log(A); //ordenar em ordem crescente
let semduplas = Array.from(new Set(Aduplicados)); // tirar duplicados do array
console.log(`${semduplas} = Sem estar Duplicados`);

//NESTED ARRAY
const nested = [ ['A', 'B'], ['C']];
const flattened = nested.flat();
console.log(flattened);

//REDUCE
var total = A.reduce((total, numero) => total + numero, 0); //Somando tudo
console.log(total);


//MAP
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt);
console.log(x);

var newarray = numbers.map(myFunction) //Agora todos elementos do array vao passar na funcao, item por item

function myFunction(num) {
  return num * 10;
}
console.log(newarray);


//The average of a nested Array
/*We will use recursion to solve this problem.
For each element in an array call the callback
If an element is a number then add the value to sum
Else if an element is an array then call the callback recursively.*/
let arr = [[1,2,3],4,5]
const s = arr.flat().reduce((accumulator,currentValue)=>accumulator+currentValue)
console.log(s);

//SPREAD OPERATOR
//Copying Arrays, also works with Objects, but does not perform deep-copy
let fruits = ['A', 'B', 'C', 'D'];
let fruitsCopy = [ ...fruits ]; 
console.log(...fruitsCopy); 

//Merging
let fruits = ['A', 'B', 'C', 'D'];
let vegetables  = ['T', 'V', 'R'];

let fruitsAndVeg = [...fruits, ...vegetables];