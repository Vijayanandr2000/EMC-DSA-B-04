// https://leetcode.com/problems/sort-an-array/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (a) {
  function merge(low, mid, high) {
    let i = low,
      j = mid + 1,
      temp = [];
    while (i <= mid && j <= high) {
      if (a[i] < a[j]) {
        temp.push(a[i]);
        i++;
      } else {
        temp.push(a[j]);
        j++;
      }
    }
    while (i <= mid) {
      temp.push(a[i]);
      i++;
    }
    while (j <= high) {
      temp.push(a[j]);
      j++;
    }

    // console.log(temp)
    for (let i = low; i <= high; i++) {
      a[i] = temp[i - low];
    }
  }

  function mergeSort(low, high) {
    if (low == high) return;

    let mid = Math.floor((low + high) / 2);
    mergeSort(low, mid);
    mergeSort(mid + 1, high);

    merge(low, mid, high);
  }

  mergeSort(0, a.length - 1);
  return a;
};
