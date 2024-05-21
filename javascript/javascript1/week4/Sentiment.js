// Build a sentiment analyze
// A sentiment analyze is some functionality that figures out how positive/negative a sentence is.

// Fx the sentence `I am mega super awesome happy" Should have a high score The sentence "I hate doing boring stuff" should have a low score.

// Create a function that takes a string as a parameter. calling the function will return an object with score, positiveWords and negativeWords. You decide how the score should be implemented and what words are negative and positive.

// Build a sentiment analyze
function getSentimentScore(sentence) {
  const positiveWords = [
    "happy",
    "awesome",
    "great",
    "amazing",
    "good",
    "fantastic",
    "super",
  ];
  const negativeWords = ["hate", "boring", "bad", "ad", "angry", "upset"];

  let score = 0;
  let positiveWordsFound = [];
  let negativeWordsFound = [];

  const words = sentence.split(" ");

  for (i = 0; i < positiveWords.length; i++) {
    if (words.includes(positiveWords[i])) {
      score++;
      positiveWordsFound.push(positiveWords[i]);
    }
  }

  for (j = 0; j < negativeWords.length; j++) {
    if (words.includes(negativeWords[j])) {
      score--;
      negativeWordsFound.push(negativeWords[j]);
    }
  }
  return {
    score: score,
    positiveWords: positiveWordsFound,
    negativeWords: negativeWordsFound,
  };
}

const sentimentScoreObject = getSentimentScore("I am mega super awesome happy");
console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/
