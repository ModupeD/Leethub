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
var postorderTraversal = function(root) {
        if(!root) return [];
    
    const result = [];
    
    const inorder = (node) => {
        if(!node) return null;
        
        if(node.left) inorder(node.left);
        if(node.right) inorder(node.right);
         result.push(node.val);
    }
    
    inorder(root);
    return result;
};