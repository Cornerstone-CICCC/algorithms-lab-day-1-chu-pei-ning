// Exercise 2: Write a function named 'filterByCategory' that takes an array of product objects and a category string, and returns a new array with products that belong to the given category.

function filterByCategory(products, category) {
      let filtered = []
      for(let i = 0; i < products.length; i++){
            if (products[i].category === category) {
                  filtered.push(products[i])
            }
      }
      return filtered
}

const array = [{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }]
console.log(filterByCategory(array, 'Fruit')) // [{ name: 'Apple', category: 'Fruit' }]
