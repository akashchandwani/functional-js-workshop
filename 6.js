function countWords(inputWords) {

  return inputWords.reduce((accumulator, currentWord) => {
    if (typeof accumulator[currentWord] === "undefined"){
      accumulator[currentWord] = 1;
    } else {
      accumulator[currentWord] += 1;
    }
    return accumulator;
  }, {});
}

var wordList = [
"c",
"a",
"a",
"a",
"a",
"b",
"b",
"b",
"b"
];
console.log(JSON.stringify(countWords(wordList)) === JSON.stringify({
"c": 1,
"a": 4,
"b": 4
}));

module.exports = countWords
