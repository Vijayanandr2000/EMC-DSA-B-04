// https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1

let a = [3, 34, 4, 12, 5, 2];
let sum = 9;

function solve(i, sum, map) {
  let key = `${i}-${sum}`;
  if (map.has(key)) return map.get(key);

  if (sum === 0) return true;
  if (i < 0) return false;

  let notTake = solve(i - 1, sum, map);
  let take = false;
  if (a[i] <= sum) {
    take = solve(i - 1, sum - a[i], map);
  }
  let ans = take || notTake;

  map.set(key, ans);

  return ans;
}

console.log(solve(a.length - 1, sum, new Map()));
