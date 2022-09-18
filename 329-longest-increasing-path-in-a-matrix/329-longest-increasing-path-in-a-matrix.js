/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    // will be used if i + 1 or i - 1 ever becomes illegal
    const def = new Array(n).fill(-Infinity);
    
    // maintain a cache
    const dp = Array(m).fill(0).map(_ => Array(n).fill(0));
    let res = 0
    
    // peel the onion
    const dfs = (i, j) => {
        // base case #1
        if (i < 0 || j < 0 || i >= m || j >= n) {
            return 0;
        }
        
        // dp case
        if (dp[i][j]) {
            return dp[i][j];
        }
        
        // check if the values to up, down, left, right are greater (if so gets their value)
        const curr = matrix[i][j];
        const top = ((matrix[i - 1] || def)[j] > curr) ? dfs(i - 1, j) : 0
        const down = ((matrix[i + 1] || def)[j] > curr) ? dfs(i + 1, j) : 0
        const left = (matrix[i][j - 1] > curr) ? dfs(i, j - 1) : 0
        const right = (matrix[i][j + 1] > curr) ? dfs(i, j + 1) : 0
     
        // sets this dp to be 1 + the max of the longest path of the surrounding cells
        dp[i][j] = 1 + Math.max(top, down, left, right);
        // sets our answer if changes
        res = Math.max(res, dp[i][j]);
        return dp[i][j]    
    }
    
    // iterate through each cell o(mn)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j);
        }
    }
    
    return res;
};