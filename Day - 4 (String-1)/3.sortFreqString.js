// https://leetcode.com/problems/sort-characters-by-frequency/description/

/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // Step 1: Create a frequency array for ASCII characters (0–127)
  let freq = new Array(128).fill(0);

  // Step 2: Count frequency of each character
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    freq[code]++;
  }

  console.log(JSON.stringify(freq));

  // Step 3: Collect characters with their frequencies
  let charFreq = [];
  for (let i = 0; i < 128; i++) {
    if (freq[i] > 0) {
      charFreq.push([String.fromCharCode(i), freq[i]]);
    }
  }

  console.log(JSON.stringify(charFreq));

  // Step 4: Sort by frequency in descending order
  charFreq.sort((a, b) => b[1] - a[1]);

  // Step 5: Build result string
  let result = "";
  for (let i = 0; i < charFreq.length; i++) {
    let data = charFreq[i];
    let alpha = data[0];
    let repeat = data[1];
    for (let j = 0; j < repeat; j++) {
      result += alpha;
    }
  }

  console.log(result);

  return result;
};
frequencySort("tree");
