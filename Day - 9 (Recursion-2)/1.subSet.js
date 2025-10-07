// https://leetcode.com/problems/subsets/description/

let a = [1, 2, 3];
let result = [];

function solve(i, ans) {
  if (i >= a.length) {
    result.push([...ans]);
    // console.log(ans)
    return;
  }

  ans.push(a[i]);
  solve(i + 1, ans);
  ans.pop();
  solve(i + 1, ans);
}

solve(0, []);

console.log(result);
