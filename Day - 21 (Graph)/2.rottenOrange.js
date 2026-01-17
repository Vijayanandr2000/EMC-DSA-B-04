// https://leetcode.com/problems/rotting-oranges/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let countOne = 0;
  let q = [];
  let countTime = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let data = grid[i][j];

      if (data == 1) countOne++;
      if (data == 2) q.push([i, j]);
    }
  }

  q.push(null);

  while (q.length) {
    let node = q.shift();

    if (node == null && q.length == 0) {
      break;
    }

    if (node == null) {
      q.push(null);
      countTime++;
      continue;
    }

    let row = node[0],
      col = node[1];

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    for (let j = 0; j < 4; j++) {
      let r = row + dx[j];
      let c = col + dy[j];

      if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
        if (grid[r][c] == 1) {
          grid[r][c] = 2;
          q.push([r, c]);
          countOne--;
        }
      }
    }
  }

  if (countOne == 0) return countTime;

  return -1;
};
