// https://leetcode.com/problems/sliding-window-maximum/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (a, k) {
  // let a = [1, 2, 3, 4, 5, 4, 3, 2, 1]
  // let k = 3

  // let ans = []

  // for (i = 0; i < (a.length - k + 1); i++) {
  //     let max = a[i]

  //     for (let j = i; j < i + k; j++) {
  //         if (max < a[j]) {
  //             max = a[j]
  //         }
  //     }

  //     ans.push(max)

  // }

  // // console.log(ans)
  // return ans

  let q = [];
  let ans = [];

  for (let i = 0; i < a.length; i++) {
    while (q.length && a[i] > a[q[q.length - 1]]) {
      q.pop();
    }

    q.push(i);

    if (q[0] <= i - k) {
      q.shift();
    }

    if (i >= k - 1) {
      ans.push(a[q[0]]);
    }
  }

  return ans;
};
