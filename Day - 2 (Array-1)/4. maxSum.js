// https://leetcode.com/problems/maximum-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (a) {
  // if(a.length === 0) return -1

  // let max = -Infinity

  // for(let i = 0 ; i < a.length ; i++){
  //     let sum = a[i]
  //     for(let j = i + 1 ; j < a.length ; j++){
  //         sum += a[j]
  //         if(max < sum){
  //             max = sum
  //         }
  //     }

  //     if(max < sum){
  //         max = sum
  //     }
  // }

  // return max
  let sum = 0;
  let max = -Infinity;

  for (let i = 0; i < a.length; i++) {
    sum += a[i];

    if (max < sum) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};
