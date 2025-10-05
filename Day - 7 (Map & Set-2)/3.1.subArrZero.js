// https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1

class Solution {
  // Function to check whether there is a subarray present with 0-sum or not.
  subArrayExists(arr) {
    // code here
    const seenSums = new Set();
    let sum = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
      sum += arr[i];

      // Check if sum is 0 or seen before
      if (sum === 0 || seenSums.has(sum)) {
        return true;
      }

      seenSums.add(sum);
    }

    return false;
  }
}
