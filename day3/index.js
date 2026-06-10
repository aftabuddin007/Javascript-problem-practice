// Day 3 — Arrays & Array Methods
 
// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.
function sumArray(arr){
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum;
}
const values = [1, 2, 3, 4, 5];
console.log(sumArray(values))
