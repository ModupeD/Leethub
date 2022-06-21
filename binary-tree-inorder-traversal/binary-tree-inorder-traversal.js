/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return [];
    
    const result = [];
    
    const inorder = (node) => {
        if(!node) return null;
        
        if(node.left) inorder(node.left);
        result.push(node.val);
        if(node.right) inorder(node.right);
    }
    
    inorder(root);
    return result;
};