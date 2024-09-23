// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  const textArrary = text.split(' ')
  let longest = ''
  for (let i = 0; i < textArrary.length; i ++) {
    const currentWord = textArrary[i]
    if (textArrary[i].length > longest.length) {
      longest = currentWord
    }
  }
  return longest
}

console.log(longestWord('The quick brown fox jumps over the lazzzzzzy dog') )// 'lazzzzzzy's