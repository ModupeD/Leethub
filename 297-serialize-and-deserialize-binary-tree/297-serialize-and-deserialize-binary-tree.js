/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return "";
    
    let Q = [];
    let res = '';
    
    Q.push(root);
    
    while (Q.length) {
        let node = Q.shift();
        
        if (!node) {
            res = res.concat("n ");
            continue;
        }
        res = res.concat(node.val + " ");
        
        Q.push(node.left);
       
        Q.push(node.right);
    }

    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data == '') return null;

    let Q = [],
        values = data.split(' ');

    let root = new TreeNode(values[0]);
    Q.push(root);

    for (let i = 1; i < values.length-1; i++) {      
        let node = Q.shift();
        
        if (values[i] != 'n') {
            let left = new TreeNode(values[i]);
            node.left = left;
            Q.push(left);
        } 
        
        if (values[++i] != 'n') {
            let right = new TreeNode(values[i]);
            node.right = right;
            Q.push(right);
        }   
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */