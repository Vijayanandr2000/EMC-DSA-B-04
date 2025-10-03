// https://leetcode.com/problems/longest-common-prefix/description/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let ans = "";

  let r = strs[0];

  for (let j = 0; j < r.length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (r[j] != strs[i][j]) {
        return ans;
      }
    }

    ans = ans + r[j];
  }

  return ans;
};
