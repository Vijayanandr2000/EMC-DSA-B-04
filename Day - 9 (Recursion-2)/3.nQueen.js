// https://leetcode.com/problems/n-queens/description/

let n = 4;

let b = Array.from({ length: n }, () => Array(n).fill("."));

let result = [];
function isSafe(r, c) {
  for (let row = 0; row < r; row++) {
    if (b[row][c] == "Q") {
      return false;
    }
  }

  for (let row = r - 1, col = c - 1; row >= 0 && col >= 0; row--, col--) {
    if (b[row][col] == "Q") {
      return false;
    }
  }

  for (let row = r - 1, col = c + 1; row >= 0 && col < n; row--, col++) {
    if (b[row][col] == "Q") {
      return false;
    }
  }

  return true;
}

function solve(r) {
  if (r === n) {
    console.log(b);
    // result.push(b.map(r => r.join("")))
    return;
  }

  for (let col = 0; col < n; col++) {
    // console.log(col, isSafe(r, col))
    if (isSafe(r, col)) {
      b[r][col] = "Q";
      solve(r + 1);
      b[r][col] = ".";
    }
  }
}

solve(0);
// console.log(result)
