# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
 
 p and q are descendants of the node or p or q equal to this node
 we got 6 because p is less than 6 so it goes in the left subtree, q is greater than 6 so it goes
 in the right subtree, if there is a split, where that split occurs is the lowest common ancestor
 
 if p =7 and q = 9 then we know that it would be located in the left subtree, because those values 
 are both greater than the root node, 8 is the lowest common ancestor because that is where the split occured
 
 if p = 7 and q =6, because one of them is equal to the root node none of the descendants would be an ancestor of that node itself. 
 Time complexity is o(log n) because we only have to visit one node for every single level, so its the height of the tree
 
 memory complexity is o(1) because we aren't really using data structures
        """
        cur = root
        
        while cur:
            if p.val > cur.val and q.val > cur.val:
                cur = cur.right
            elif p.val <  cur.val and q.val< cur.val:
                cur = cur.left
            else:
                return cur