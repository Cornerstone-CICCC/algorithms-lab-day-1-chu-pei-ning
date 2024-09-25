// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

//同第17題
function countOccurrences(arr) {
  let output = {}
  
  for (let i = 0; i < arr.length; i++) {
      let fruit = arr[i];
      if (fruit in output) {
          output[fruit] += 1;
      } else {
          output[fruit] = 1;
      }
  }

  return output
}


console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }