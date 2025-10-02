// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  function isPalindromeCheck(s) {
    let cleaned = "";

    // Step 1: Clean the string manually
    for (let i = 0; i < s.length; i++) {
      let ch = s[i];

      // Check if lowercase letter
      if (ch >= "a" && ch <= "z") {
        cleaned += ch;
      }
      // Check if uppercase letter
      else if (ch >= "A" && ch <= "Z") {
        cleaned += ch.toLowerCase();
      }
      // Check if digit
      else if (ch >= "0" && ch <= "9") {
        cleaned += ch;
      }
      // Else skip non-alphanumeric characters
    }

    // Step 2: Check if the cleaned string is a palindrome
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
      if (cleaned[left] !== cleaned[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }

  return isPalindromeCheck(s);
};
