// https://leetcode.com/problems/rotate-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (a, k) {
  function rev(i, j) {
    while (i <= j) {
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;

      i++;
      j--;
    }
  }

  rev(0, a.length - 1);
  rev(0, k - 1);
  rev(k, a.length - 1);
};
