// https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (map.has(ch)) {
      stack.push(map.get(ch));
    } else {
      if (stack.pop() != ch) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
