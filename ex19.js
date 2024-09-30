// Exercise 19: Write a function named 'flattenObject' that takes a nested object and returns a new object with no nested properties.

function flattenObject(obj) {
  return recursive(obj, '', {})
}
function recursive(obj, parent, result) { 
  for (let propety in obj) {
    let propName = parent ? `${parent}.${propety}` : propety 
    if (typeof(obj[propety]) == 'object') {
      recursive(obj[propety], propName, result)
    } else {
      result[propName] = obj[propety]
    }
  }
  return result
}


console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 })) // { 'a.b.c': 1, d: 2 }