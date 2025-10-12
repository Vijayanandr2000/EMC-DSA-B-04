// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0,
    temp = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      temp.push(nums1[i]);
      i++;
    } else {
      temp.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    temp.push(nums1[i]);
    i++;
  }
  while (j < n) {
    temp.push(nums2[j]);
    j++;
  }

  console.log(temp);
  for (let i = 0; i < temp.length; i++) {
    nums1[i] = temp[i];
  }
};
