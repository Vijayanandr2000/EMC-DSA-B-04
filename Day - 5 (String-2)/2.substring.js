// https://leetcode.com/problems/palindromic-substrings/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;

  // Loop over all possible centers (odd & even)
  for (let center = 0; center < 2 * s.length - 1; center++) {
    let left = Math.floor(center / 2);
    let right = left + (center % 2);

    // Expand around center while characters match
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }

  return count;
};
