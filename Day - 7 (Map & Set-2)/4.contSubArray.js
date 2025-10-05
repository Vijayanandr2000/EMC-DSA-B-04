// https://leetcode.com/problems/continuous-subarray-sum/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const modMap = new Map();
  modMap.set(0, -1); // To handle the case where subarray starts from index 0

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let mod = k !== 0 ? sum % k : sum;

    if (modMap.has(mod)) {
      let prevIndex = modMap.get(mod);
      if (i - prevIndex >= 2) return true;
    } else {
      modMap.set(mod, i); // store first occurrence of this mod
    }
  }

  return false;
};
