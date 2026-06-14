// Problem 26: Destructure and Rename  [Easy]
// Description: Given a user object, use 
// destructuring to extract firstName, lastName, and age, renaming firstName to name.
// Example:
// const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25
// Hint: Use: const { firstName: name, lastName, age } = user;
const user = {firstName:'Sara', lastName:'Khan', age:25};
const { firstName: name, lastName, age } = user;
console.log(name) // 'Sara'
console.log(lastName) // 'Khan'
console.log(age) // 25  
    
