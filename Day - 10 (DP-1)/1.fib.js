// https://leetcode.com/problems/fibonacci-number/description/

function fib(n, map) {
  if (n <= 1) return n;

  if (map.has(n)) return map.get(n);

  let data = fib(n - 1, map) + fib(n - 2, map);

  map.set(n, data);

  return data;
}

console.time("start");
console.log(fib(50, new Map()));
console.timeEnd("start");
