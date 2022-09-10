/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
      // init your in degrees and graph
    const ins = Array(n + 1).fill(0)
    const graph = {};
    
    // fill in degrees and graph
    for (const [prereq, clss] of relations) {
        if (!graph[clss]) graph[clss] = [];
        graph[clss].push(prereq);
        
        ins[prereq]++;
    }
    
    
    // maintain memoization to remove redundant calcalation
    const dp = {}
    
    // shift time to be 1-indexed
    time.unshift(0)
    
    // run dfs to get longest path
    const dfs = (node) => {
        if (dp[node]) return dp[node]; // dp case
        
        const timeTaken = time[node];
        const prereqs = graph[node] || [];
        
        let max = 0; // if the node has no prereqs, this will stay 0
        for (const prereq of prereqs) { // else, max will change to be the time taken to get here
            max = Math.max(max, dfs(prereq));
        }    
        dp[node] = timeTaken + max;
        return dp[node];
    }
    
    const lastClasses = []; // must run this on all children
    for (let i = 1; i <= n; i++) {
        if (ins[i] === 0) lastClasses.push(i);
    }
    
    let res = 0;
    for (const clss of lastClasses) {
        res = Math.max(res, dfs(clss)); 
    }
    
    return res
};

// sub problem: 
// the time taken to reach a given class, is the time taken to complete the longest prereq
