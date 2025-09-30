// https://www.geeksforgeeks.org/problems/reverse-an-array/1

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  // Function to reverse the array.
  reverseArray(arr) {
    // your code here
    let i = 0,
      j = arr.length - 1;

    while (i <= j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      i++;
      j--;
    }
    return arr;
  }
}
