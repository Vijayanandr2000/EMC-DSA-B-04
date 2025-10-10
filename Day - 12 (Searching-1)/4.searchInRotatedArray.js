// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

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

    if (a[low] <= a[mid]) {
      if (a[low] <= tar && tar < a[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      if (a[mid] < tar && tar <= a[high]) low = mid + 1;
      else high = mid - 1;
    }
  }

  return -1;
};
