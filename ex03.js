// Exercise 3: Write a function named 'getFullNames' that takes an array of user objects (each with 'firstName' and 'lastName' properties) and returns an array of full names (e.g., 'John Doe'). 

function getFullNames(users) {
  let fullName = ""
  let outputs = []
  for (let i = 0; i < users.length; i++) {
    fullName = users[i].firstName + ' ' + users[i].lastName
    outputs.push(fullName)
  }
  return outputs
}

console.log(getFullNames([{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Doe' }])) // ['John Doe', 'Jane Doe']
