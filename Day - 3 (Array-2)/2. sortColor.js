// https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (a) {
  // let countArr = [0, 0, 0]
  // for(let i = 0 ; i < a.length ; i++){
  //     let idx = a[i]
  //     countArr[idx]++
  // }
  // console.log(countArr)

  // let idx = 0
  // for(let i = 0 ; i < 3 ; i++){
  //     for(let j = 0 ; j < countArr[i] ; j++){
  //         a[idx] = i
  //         idx++
  //     }
  // }

  let s = 0,
    m = 0,
    e = a.length - 1;
  while (s <= e) {
    if (a[s] == 2) {
      let temp = a[s];
      a[s] = a[e];
      a[e] = temp;
      e--;
    } else if (a[s] == 1) {
      s++;
    } else {
      let temp = a[s];
      a[s] = a[m];
      a[m] = temp;
      m++;
      s++;
    }
  }
};
