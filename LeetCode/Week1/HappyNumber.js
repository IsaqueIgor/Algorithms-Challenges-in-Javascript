var isHappy = function(n) {
    const history = {}
    
    while (n != 1) {
        if (n in history) {
            return false 
        } else {
            history[n] = n
            n = n.toString().split('').reduce((acc, num) => acc + (num * num), 0)
        }
    }
    return true; 
};

console.log(isHappy(19));