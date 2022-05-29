/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let max = 0
    let begin = 0
    let map = {}
    for(let end = 0; end < s.length; end ++){
        if(map[s[end]] !== undefined && map[s[end]] >= begin) {
            begin = map[s[end]] + 1
        }
         map[s[end]] = end
         max = Math.max(max, end - begin + 1)
        }
    
       return max
};