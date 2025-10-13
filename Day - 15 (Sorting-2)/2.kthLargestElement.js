// https://leetcode.com/problems/kth-largest-element-in-an-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (a, k) {
  function partition(s, e) {
    let pivot = a[s];
    let i = s + 1;
    let j = e;

    function swap(i1, j1) {
      let temp = a[i1];
      a[i1] = a[j1];
      a[j1] = temp;
    }

    while (i <= j) {
      while (pivot >= a[i] && i <= e) i++;

      while (pivot < a[j] && j >= s) j--;

      if (i < j) {
        swap(i, j);
      }
    }

    swap(s, j);
    return j;
  }

  let low = 0,
    high = a.length - 1;
  let idxToFind = a.length - k;

  while (low <= high) {
    let pIdx = partition(low, high);

    if (pIdx === idxToFind) return a[idxToFind];
    else if (pIdx < idxToFind) low = pIdx + 1;
    else high = pIdx - 1;
  }
};
