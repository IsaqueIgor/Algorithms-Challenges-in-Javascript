//Convert String to Character
let myName = "Isaque Igor";
let chars = [...myName];

//console.log(chars);

//Eliminate Duplicates from an Array
let num = [1,2,3,3,4,3,5];
let onlyUnique = [...new Set(num)];

console.log(onlyUnique);

//Spread operator In Destructuring variable
const address = [24, 'Brazil', 'Isaque Igor'];
const [ Age, ...rest ] = address;
console.log(Age, rest)

//Spread operator for Merging
let brands = ['Nike', 'Adidas', 'Puma'];
let localBrands = ['Rebook', 'Olympicus'];
let allBrands = [...brands, ...localBrands];

//Spread operator for Copying Arrays
let brandsCopy = [...brands];
console.log(brandsCopy);