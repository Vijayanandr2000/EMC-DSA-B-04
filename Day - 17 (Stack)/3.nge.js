// https://leetcode.com/problems/next-greater-element-i/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (a, b) {
  // let temp = []
  let map = new Map();

  // for(let i = 0 ; i < b.length ; i++){
  //     let c = b[i]
  //     for(let j = i ; j < b.length ; j++){
  //         if(c < b[j]){
  //             temp.push(b[j])
  //             map.set(c, b[j])
  //             break;
  //         }

  //         if(j == b.length - 1){
  //             temp.push(-1)
  //         }
  //     }
  // }

  // let ans = []
  // for(let i = 0 ; i < a.length ; i++){
  //     if(map.has(a[i])){
  //         ans.push(map.get(a[i]))
  //     }else{
  //         ans.push(-1)
  //     }
  // }

  // return ans

  let stack = [];

  for (let i = b.length - 1; i >= 0; i--) {
    let n = b[i];

    while (stack.length > 0 && stack[stack.length - 1] < n) {
      stack.pop();
    }

    map.set(n, stack.length == 0 ? -1 : stack[stack.length - 1]);
    stack.push(n);
  }

  let ans = [];
  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i])) {
      ans.push(map.get(a[i]));
    } else {
      ans.push(-1);
    }
  }

  return ans;
};
