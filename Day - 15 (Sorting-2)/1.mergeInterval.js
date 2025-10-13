// https://leetcode.com/problems/merge-intervals/description/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let ans = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let last = ans[ans.length - 1];
    let curr = intervals[i];

    if (last[1] >= curr[0]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      ans.push(curr);
    }
  }

  return ans;
};
