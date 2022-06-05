/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let first = m- 1;
    let second = n - 1;
    let i = m + n -1;
    
    while(second >= 0){
        let fVal = nums1[first];
        let sVal = nums2[second];
        
        if(fVal > sVal){
            nums1[i] = fVal;
            i--;
            first--;
        } else{
            nums1[i] = sVal;
            i--;
            second--
        }
}
 
};