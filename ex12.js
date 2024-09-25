// Exercise 12: Write a function named 'filterAdults' that takes an array of user objects (each with an 'age' property) and returns a new array with only the users who are 18 or older.

function filterAdults(users) {
  const usersOnlyAdult = users.filter( user => user.age >= 18)
  return usersOnlyAdult
}

console.log(filterAdults([{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }, { name: 'Jim', age: 17 }])) 
// [{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }]