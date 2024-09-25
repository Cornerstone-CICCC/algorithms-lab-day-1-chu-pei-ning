// Exercise 5: Write a function named 'groupByCategory' that takes an array of product objects and returns an object where the keys are categories and the values are arrays of products in those categories.

function groupByCategory(products) {
  let output = {}
  for (let i = 0; i < products.length; i++) {
    let category = products[i].category
    if (category in output) {
      output[category].push(products[i])
    } else {
      output[category] = [products[i]]
    }
  }
  return output
}


const array = [
  { name: 'Apple', category: 'Fruit' }, 
  { name: 'Carrot', category: 'Vegetable' }, 
  { name: 'Banana', category: 'Fruit' }
]
console.log(groupByCategory( array)) 
/*
{ 
  Fruit: [{ name: 'Apple', category: 'Fruit' }, { name: 'Banana', category: 'Fruit' }], 
  Vegetable: [{ name: 'Carrot', category: 'Vegetable' }] 
}
*/