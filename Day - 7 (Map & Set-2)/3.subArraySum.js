// https://leetcode.com/problems/subarray-sum-equals-k/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map();
  map.set(0, 1); // Handle the case when sum == k directly

  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // Step 1: Check if there is a prefix sum that satisfies the condition
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    // Step 2: Update the prefix sum map
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};
