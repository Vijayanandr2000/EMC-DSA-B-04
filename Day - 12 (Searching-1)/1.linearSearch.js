// https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1

class Solution {
  search(a, x) {
    // write your code here
    for (let i = 0; i < a.length; i++) {
      if (a[i] === x) return i;
    }

    return -1;
  }
}
