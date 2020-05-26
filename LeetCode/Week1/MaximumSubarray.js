/*
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/
var maxSubArray = function(nums) {
    let size = nums.length;
    let maxSum = 0;
    let currentSum = 0;

    if(size === 1)
        return nums;

    for(let number of nums){
       currentSum = Math.max((currentSum+number), 0);
       maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
};
//Kadane's Algorithms
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-2,-1]));