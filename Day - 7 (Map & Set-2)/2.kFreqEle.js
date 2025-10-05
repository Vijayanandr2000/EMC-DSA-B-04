// https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map();

  // Step 1: Build frequency map
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Step 2: Create buckets where index = frequency
  const buckets = Array(nums.length + 1)
    .fill()
    .map(() => []);
  for (const [num, freq] of freqMap.entries()) {
    buckets[freq].push(num);
  }

  // Step 3: Collect top K frequent elements from buckets
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k);
};
