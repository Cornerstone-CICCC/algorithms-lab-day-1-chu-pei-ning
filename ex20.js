// Exercise 20: Write a function named 'anagramGroups' that takes an array of strings and returns an array of arrays, grouping anagrams together.

function anagramGroups(arr) {
  let refObj = {}
  let result = []

  for (let item of arr) {
    let key = item.split('').sort().join('')
    if (refObj.hasOwnProperty(key)){
      refObj[key].push(item)
      result.push(refObj[key])
    } else {
      refObj[key] = [item]
    }
  }
  return result
}

console.log(anagramGroups(['bat', 'tab', 'cat', 'act'])) // [['bat', 'tab'], ['cat', 'act']]