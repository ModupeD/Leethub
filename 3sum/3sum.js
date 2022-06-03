/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const twoSum = (j, target,nums) => {
    let k = nums.length -1 ;
    let result = [];
    
    while(j < k){
        let leftVal = nums[j];
        let rightVal = nums[k];
        
        if(leftVal + rightVal > target){
            k--;
        } else if(leftVal + rightVal < target) {
            j++;
        } else {
            
            result.push([(target * -1), leftVal, rightVal]);
            while(j < k && nums[j] === nums[j+1]) j++;
            while( j < k && nums[k] === nums[k-1]) k++;
            j++;
            k--;
        }
    }
    return result;
}
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    const result = [];
    
    for(let i = 0; i < nums.length; i++ ){
        if(nums[i] === nums[i-1]) continue;
        
        let target = nums[i] * -1;
        let subResult = twoSum(i + 1, target, nums);
        result.push(...subResult)
    }
    
    return result;
};