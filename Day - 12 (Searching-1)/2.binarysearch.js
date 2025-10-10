// https://leetcode.com/problems/binary-search/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (a, tar) {
  let low = 0,
    high = a.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (a[mid] == tar) return mid;
    else if (a[mid] < tar) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
};
