// https://leetcode.com/problems/search-a-2d-matrix/description/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (mat, target) {
  let row = 0,
    col = mat[0].length - 1;

  while (row < mat.length && col >= 0) {
    let val = mat[row][col];

    if (val == target) return true;
    else if (val > target) col--;
    else row++;
  }

  return false;
};
