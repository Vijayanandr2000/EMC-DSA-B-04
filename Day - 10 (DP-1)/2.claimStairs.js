// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let ans = [1, 1];

  for (let i = 2; i <= n; i++) {
    let n = ans[i - 1] + ans[i - 2];
    ans[i] = n;
  }

  return ans[n];
};
