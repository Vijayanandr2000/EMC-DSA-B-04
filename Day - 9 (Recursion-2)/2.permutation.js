// https://leetcode.com/problems/permutations/description/

let a = [1, 2, 3];

function swap(s, e) {
  let temp = a[s];
  a[s] = a[e];
  a[e] = temp;
}

function solve(i) {
  if (i === a.length) {
    console.log(a);
    return;
  }

  for (let idx = i; idx < a.length; idx++) {
    swap(idx, i);
    solve(i + 1);
    swap(idx, i);
  }
}
solve(0);
