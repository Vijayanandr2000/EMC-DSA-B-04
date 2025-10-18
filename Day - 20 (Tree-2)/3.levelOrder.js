// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let q = [root, null];
  let ans = [[]];

  while (true) {
    let node = q.shift();

    if (node == null && q.length == 0) {
      break;
    }

    if (node == null) {
      q.push(null);
      ans.push([]);
      continue;
    }

    let idx = ans.length - 1;
    ans[idx].push(node.val);

    if (node.left) {
      q.push(node.left);
    }

    if (node.right) {
      q.push(node.right);
    }
  }

  return ans;
};
