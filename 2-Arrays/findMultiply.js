/**
 * Find two numbers that multiply to a target
 */

function FindMultiply(nums, target) {
  var found;
  for (let i = 0; i < nums.length; i++) {
    found = nums.find((element) => element === target / nums[i]);

    if (found) {
      return [nums[i], found];
    }
  }
  return 'There is no matches';
}

console.log(FindMultiply([2, 4, 1, 6, 5, 40, -1], 20));
console.log(FindMultiply([2, 4, 1, 6, 5, 40, -1], 250));
