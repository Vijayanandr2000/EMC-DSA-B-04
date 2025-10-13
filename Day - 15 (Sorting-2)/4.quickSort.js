// https://leetcode.com/problems/sort-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (a) {
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

  function quickSort(low, high) {
    if (low < high) {
      let pivotIdx = partition(low, high);
      quickSort(0, pivotIdx - 1);
      quickSort(pivotIdx + 1, high);
    }
  }

  quickSort(0, a.length - 1);
  return a;
};
