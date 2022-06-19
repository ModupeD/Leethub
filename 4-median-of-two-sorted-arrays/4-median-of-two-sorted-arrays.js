/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArr = nums1.concat(nums2).sort((a,b) => a-b);
    let index = mergedArr.length/2

    let mergedIndex =  Math.floor(index);
    
   if(mergedArr.length % 2 == 0){
       
      return  (mergedArr[mergedIndex]+ mergedArr[mergedIndex-1])/2
       
   } else {
       
         return  mergedArr[mergedIndex]
       
   }
  
   
};