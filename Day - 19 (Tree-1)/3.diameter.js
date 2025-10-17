// https://leetcode.com/problems/diameter-of-binary-tree/description/

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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  var maxDepth = function (root) {
    if (!root) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  };

  maxDepth(root);

  return diameter;
};
