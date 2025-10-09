// https://leetcode.com/problems/coin-change/description/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (a, amt) {
  function solve(i, amt, map) {
    let key = `${i}-${amt}`;
    if (map.has(key)) return map.get(key);

    if (amt == 0) return 0;
    if (i === a.length || amt < 0) return Infinity;

    let notTake = solve(i + 1, amt, map);
    let take = Infinity;
    if (a[i] <= amt) {
      take = 1 + solve(i, amt - a[i], map);
    }
    let ans = Math.min(take, notTake);
    map.set(key, ans);

    return ans;
  }

  let res = solve(0, amt, new Map());

  if (res == Infinity) return -1;

  return res;
};
