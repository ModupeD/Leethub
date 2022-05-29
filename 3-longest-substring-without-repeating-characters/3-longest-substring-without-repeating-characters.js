/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
//     let max = 0
//     let begin = 0
//     let map = {}
//     for(let end = 0; end < s.length; end ++){
//         if(map[s[end]] !== undefined && map[s[end]] >= begin) {
//             begin = map[s[end]] + 1
//         }
//          map[s[end]] = end
//          max = Math.max(max, end - begin + 1)
//         }
    
//        return max
 
    
// For this solution, i use the sliding windows approach
    let max = 0;
    let windowStart = 0;// beginning of the window
    const soFar = {};// hashmap to store the values and their occurences
    
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
       let rightChar = s[windowEnd];
       soFar[rightChar] = soFar[rightChar] + 1 || 1
        //soFar[rightChar] stands the values in the second pointer, if it is more than one distinct character I the soFar[leftChar] until its just one distinct character
        while(soFar[rightChar] > 1) {
            let leftChar = s[windowStart];
            
            if(soFar[leftChar] > 1){
                  soFar[leftChar]--
            } else {
                delete soFar[leftChar];
            }
              windowStart++;
        }
        max = Math.max(max, (windowEnd - windowStart) + 1)
    } 
    return max
};