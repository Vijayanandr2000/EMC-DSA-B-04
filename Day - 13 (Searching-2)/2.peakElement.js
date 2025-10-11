// https://leetcode.com/problems/find-peak-element/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (a) {
  let n = a.length;

  if (n == 1) return 0;
  if (a[0] > a[1]) return 0;
  if (a[n - 1] > a[n - 2]) return n - 1;

  let low = 1,
    high = n - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let prev = a[mid - 1],
      next = a[mid + 1];

    if (prev < a[mid] && next < a[mid]) return mid;
    else if (a[mid] < next) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
};
