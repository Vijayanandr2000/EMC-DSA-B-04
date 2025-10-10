// https://leetcode.com/problems/search-insert-position/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (a, tar) {
  let low = 0,
    high = a.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (a[mid] < tar) low = mid + 1;
    else high = mid;
  }

  if (a[low] < tar) return low + 1;

  return low;
};
