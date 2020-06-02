/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

let MoveZeroes = (nums) => {
    let count = 0;
    for (var i = nums.length; i--;) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
          count++;
        }
      }
    
      for(let i =0; i<count; i++){
          nums.push(0);
      }
      return nums;
    
    
}
console.log(MoveZeroes([0,1,0,3,12]));