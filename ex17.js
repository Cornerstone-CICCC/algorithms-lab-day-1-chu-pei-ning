// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and returns the string that appears the most frequently.

function mostFrequent(arr) {
  const fruitCounter = arr.reduce((property, current) => {
    property[current] = (property[current] || 0) + 1
    return property
  }, {} ) //出來是{ apple: 3, banana: 2, orange: 1 }

  return 
}

console.log(mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])) // 'apple'