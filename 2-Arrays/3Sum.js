/**
 * Write a function that takes a list of integers and a target and determines
 * if the target can be reached with exactly three elements from the list and returns them if so
 *
 *
 * No repeat element
 */
const threeSum = function (nums, target) {
  let result = [];
  let size = nums.length;

  if (size < 3) {
    return result;
  }

  const sorted = nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < size - 2; i++) {
    var partial = target - nums[i];
    let j = i + 1;
    let k = size - 1;

    while (j < k) {
      var partial_sum = nums[j] + nums[k];
      if (partial_sum === partial) {
        return console.log(` ${nums[i]} e ${nums[j]} e ${nums[k]}`);
      } else if (partial_sum > partial) {
        k--;
      } else {
        j++;
      }
    }
    return result;
  }
};
threeSum([19, 3, 7, 10, 11], 20);
threeSum([19, 3, 7, 10, 11], 18);
threeSum([4, 5, 6], 12);
threeSum([4, 4, 4], 12);
