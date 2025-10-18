// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description/

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
var verticalTraversal = function (root) {
  if (!root) return [];

  let q = [[root, 0], null];
  // let ans = [[]]
  let map = {};

  let min = Infinity,
    max = -Infinity;

  while (true) {
    let mat = q.shift();

    if (mat == null && q.length == 0) {
      break;
    }

    if (mat == null) {
      q.push(null);
      continue;
    }

    let node = mat[0];
    let idx = mat[1];

    min = Math.min(min, idx);
    max = Math.max(max, idx);

    if (map[idx] == undefined) {
      map[idx] = [node.val];
    } else {
      map[idx].push(node.val);
    }

    if (node.left) {
      q.push([node.left, idx - 1]);
    }

    if (node.right) {
      q.push([node.right, idx + 1]);
    }
  }

  let ans = [];
  for (let i = min; i <= max; i++) {
    if (map[i]) {
      ans.push(map[i].sort((a, b) => a - b));
    }
  }

  console.log(map);
  return ans;
};
