function getCharacterFrequencies(str) {
  // Create an object to store character frequencies
  const charFreq = {};

  // Loop through the string to count the frequency of each character
  for (let char of str) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  // Convert the object into an array of objects with character and count properties
  const result = {
    characters: Object.keys(charFreq).map((char) => ({
      character: char,
      count: charFreq[char],
    })),
    length: str.length,
  };

  return result;
}

// Test case
console.log(getCharacterFrequencies("happy"));
