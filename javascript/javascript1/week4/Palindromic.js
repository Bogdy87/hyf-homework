function longestPalindromicSubstring(str) {
  if (str.length === 0) return "";

  let longestPalindrome = "";

  for (let i = 0; i < str.length; i++) {
    // Find longest palindrome with center at i
    const oddPalindrome = expandAroundCenter(str, i, i);
    const evenPalindrome = expandAroundCenter(str, i, i + 1);

    // Update longest palindrome found so far
    const longerPalindrome =
      oddPalindrome.length > evenPalindrome.length
        ? oddPalindrome
        : evenPalindrome;
    if (longerPalindrome.length > longestPalindrome.length) {
      longestPalindrome = longerPalindrome;
    }
  }

  return longestPalindrome;
}

function expandAroundCenter(str, left, right) {
  let start = left;
  let end = right;

  while (start >= 0 && end < str.length && str[start] === str[end]) {
    start--;
    end++;
  }

  return str.substring(start + 1, end);
}

// Test case
console.log(longestPalindromicSubstring("babad")); // Output: "bab" or "aba"
