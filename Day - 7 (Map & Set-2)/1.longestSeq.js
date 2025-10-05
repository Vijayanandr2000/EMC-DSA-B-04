// https://leetcode.com/problems/longest-consecutive-sequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    // Only try to build sequences from the beginning
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let length = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        length += 1;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
};
