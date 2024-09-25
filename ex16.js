// Exercise 16: Write a function named 'sumNestedArray' that takes an array of arrays of numbers and returns the sum of all numbers.

function sumNestedArray(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newArr = newArr.concat(sumNestedArray(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  const sum = newArr.reduce((total, currentElement) => {
    return total + currentElement
  }, 0 )
  return sum
}

console.log(sumNestedArray([[1, 2, 3], [4, 5], [6, 7, 8]])) // 36