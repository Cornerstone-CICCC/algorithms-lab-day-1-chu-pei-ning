// Exercise 14: Write a function named 'mergeArrays' that takes two arrays and returns a new array that combines the elements of both arrays, alternating between them.

function mergeArrays(arr1, arr2) {
  let newArr = []
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i])
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i])
  }
  newArr.sort((a,b) => a - b)

  return newArr
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]