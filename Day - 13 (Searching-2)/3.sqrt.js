// https://leetcode.com/problems/sqrtx/description/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x;

  let low = 1;
  high = Math.floor(x / 2);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let sqrt = mid * mid;
    if (sqrt == x) return mid;
    else if (sqrt < x) low = mid + 1;
    else high = mid - 1;
  }

  return high;
};
