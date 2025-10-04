// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};
