// https://www.geeksforgeeks.org/problems/reverse-an-array/1

class Solution {
  // Function to reverse the array.
  reverseArray(arr) {
    // your code here
    this.solve(0, arr.length - 1, arr);
    return arr;
  }

  solve(i, j, arr) {
    if (i >= j) return;

    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;

    this.solve(i + 1, j - 1, arr);
  }
}
