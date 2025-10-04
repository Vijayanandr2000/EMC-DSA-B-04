// https://leetcode.com/problems/isomorphic-strings/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let mapST = new Map();
  let mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    let ch1 = s[i],
      ch2 = t[i];

    if (
      (mapST.has(ch1) && mapST.get(ch1) !== ch2) ||
      (mapTS.has(ch2) && mapTS.get(ch2) !== ch1)
    ) {
      return false;
    }

    mapST.set(ch1, ch2);
    mapTS.set(ch2, ch1);
  }

  return true;
};
