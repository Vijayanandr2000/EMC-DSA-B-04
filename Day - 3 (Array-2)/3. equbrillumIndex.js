// https://leetcode.com/problems/find-pivot-index/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (a) {
  // for(let i = 0 ; i < a.length ; i++){
  //     let left = 0
  //     for(let j = 0 ; j < i ; j++){
  //         left += a[j]
  //     }

  //     let right = 0
  //     for(let k = i + 1 ; k < a.length ; k++){
  //         right += a[k]
  //     }

  //     if(left == right){
  //         return i
  //     }
  // }

  // return -1
  let prefixSum = [a[0]];
  for (let i = 1; i < a.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + a[i];
  }

  console.log(prefixSum);

  for (let i = 0; i < a.length; i++) {
    let left;
    if (i == 0) {
      left = 0;
    } else {
      left = prefixSum[i - 1];
    }

    let right;
    if (i == a.length - 1) {
      right = 0;
    } else {
      right = prefixSum[a.length - 1] - prefixSum[i];
    }

    if (left == right) return i;
  }
  return -1;
};
