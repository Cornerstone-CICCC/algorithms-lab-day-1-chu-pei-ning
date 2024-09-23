// Exercise 9: Write a function named 'flattenArray' that takes an array of nested arrays and returns a single flattened array.

function flattenArray(arr) {
  let output = []
  for (let i =0; i < arr.length; i++){
    if(Array.isArray(arr[i])) {
      output = output.concat(flattenArray(arr[i]))
    } else {
      output.push(arr[i])
    }
  }    
  return output
}

console.log(flattenArray([[1, 2], [3, 4], [5, [6, 7]]])) // [1, 2, 3, 4, 5, 6, 7]