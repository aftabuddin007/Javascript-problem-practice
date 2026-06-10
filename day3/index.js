// Day 3 — Arrays & Array Methods
 
// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.
// function sumArray(arr){
//     const sum = arr.reduce((acc, cur) => acc + cur, 0);
//     return sum;
// }
// const values = [1, 2, 3, 4, 5];
// console.log(sumArray(values))


// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns
//  the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.

function findMax(arr){
    let max = arr[0];
    for (let i = 1; i <arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }   
    }
    return max;
}
const values = [1,4,66,7,232,3]
console.log(findMax(values))
