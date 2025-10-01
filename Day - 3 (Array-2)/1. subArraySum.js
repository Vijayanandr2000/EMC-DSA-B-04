// https://leetcode.com/problems/subarray-sum-equals-k/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (a, k) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    let sum = a[i];
    if (sum == k) count++;

    for (let j = i + 1; j < a.length; j++) {
      sum += a[j];
      if (sum == k) count++;
    }
  }

  return count;
};
