/*
    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
    [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
    ]
*/
let input = ["eat", "tea", "tan", "ate", "nat", "bat"];

const anagrams = (strs) => {
    let map = new Map();
    for (let str of strs) {
        const s = uniform(str);
        let l = map.get(s) || [];
        l.push(str);
        map.set(s, l);
    }
    return Array.from(map.values());
};

var uniform = function(str) {
    return str
        .split("")
        .sort()
        .join("");
};

console.log(anagrams(input));