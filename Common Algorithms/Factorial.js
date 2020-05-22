function recursiveFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(6));
console.log(recursiveFactorial(9));
console.log(recursiveFactorial(2));