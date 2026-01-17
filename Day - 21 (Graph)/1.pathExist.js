// https://leetcode.com/problems/find-if-path-exists-in-graph/description/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let map = {};
  for (let i = 0; i < edges.length; i++) {
    let u = edges[i][0];
    let v = edges[i][1];

    if (!map[u]) {
      map[u] = [];
    }
    if (!map[v]) {
      map[v] = [];
    }

    map[u].push(v);
    map[v].push(u);
  }

  let q = [source];
  let visited = [];

  while (q.length) {
    let data = q.shift();

    if (data == destination) return true;

    visited[data] = true;

    for (let i = 0; i < map[data].length; i++) {
      let neigh = map[data][i];
      if (!visted[neigh]) {
        q.push(neigh);
        visited[neigh] = true;
      }
    }
  }

  return false;
};
