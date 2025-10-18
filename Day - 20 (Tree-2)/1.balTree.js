// https://leetcode.com/problems/balanced-binary-tree/description/

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let ans = true;

  function dfs(root) {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    if (Math.abs(left - right) >= 2) ans = false;

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return ans;
};
