// https://leetcode.com/problems/longest-increasing-subsequence/description/

// let a = [10, 9, 2, 5, 3, 7, 101, 8]
// let a = [0,1,0,3,2,3]
let a = [7, 7, 7, 7, 7, 7, 7];

function solve(i, prevIdx, map) {
  let key = `${i}-${prevIdx}`;
  if (map.has(key)) return map.get(key);

  if (i === a.length) return 0;

  let notTake = solve(i + 1, prevIdx, map);
  let take = 0;
  if (prevIdx == -1 || a[i] > a[prevIdx]) {
    take = 1 + solve(i + 1, i, map);
  }

  let ans = Math.max(take, notTake);
  map.set(key, ans);

  return ans;
}

console.log(solve(0, -1, new Map()));
