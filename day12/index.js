// Problem 56: Find the Intersection of Two Arrays  [Easy]
// Description: Write a function intersection(arr1, arr2) that returns an array of unique 
//  elements that are present in both arrays.
// Example:
// Input: [1, 2, 2, 1], [2, 2, 3] → Output: [2]
// Hint: Convert one array into a Set for fast lookups, then filter the second array to keep
//  only the elements that exist in that Set. Finally, ensure the result has unique values.
// function intersection(arr1, arr2){
//     const set1 = new Set(arr1);
//     const result = arr2.filter(num => set1.has(num));
//     return [...new Set(result)];

// }
// const arr1 = [1, 2, 2, 1];
// const arr2 = [2, 2, 3,1];
// console.log(intersection(arr1, arr2)); 


// Problem 57: Move Zeroes to the End  [Easy]
// Description: Write a function moveZeroes(nums) that takes an array of numbers and moves 
//  all 0's to the end of it while maintaining the relative order of the non-zero elements.
//  Note: You should do this in-place without making a copy of the array.
// Example:
// Input: [0, 1, 0, 3, 12] → Output: [1, 3, 12, 0, 0]
// Hint: Keep track of a pointer for the position of the next non-zero element.
//  Loop through the array, and whenever you see a non-zero element, swap it with the element at the pointer, then move the pointer forward.
function moveZeroes(nums){
    let nonZeroIndex = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            
            [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
            nonZeroIndex++; 
        }
    }

    return nums;

}
const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));

// Problem 58: Valid Perfect Square  [Easy]
// Description: Given a positive integer n, write a function isPerfectSquare(n) that returns 
//  true if n is a perfect square (i.e., it can be written as x * x where x is an integer), else false.
//  Do not use any built-in library function such as Math.sqrt.
// Example:
// Input: 16 → Output: true | Input: 14 → Output: false
// Hint: You can use Binary Search! Set left = 1 and right = n. Find the
//  middle element, calculate mid * mid, and compare it with n. Repeat until found or pointers cross.