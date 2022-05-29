/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
       let max =0,
      windowStart = 0,
      progress = {};
    
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const rightChar = s[windowEnd];
        if(!(rightChar in progress)) {
            progress[rightChar] = 0;
        }
        progress[rightChar] += 1;
        
        while(Object.keys(progress).length > 2){
            const leftChar = s[windowStart];
            progress[leftChar] -=1;
            if(progress[leftChar] === 0){
                delete progress[leftChar];
            }
            windowStart += 1;
        }
        
        max = Math.max(max, (windowEnd - windowStart) + 1)
    }
    return max
};