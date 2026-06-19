// Problem 41: Two Sum  [Easy]
// Description: Given an array of numbers and a target, write a
//  function twoSum(arr, target) that returns the indices of the two 
//  numbers that add up to the target.
// Example:
// Input: [2, 7, 11, 15], target = 9Output: [0, 1]  (because 2 + 7 = 9)
// Hint: Use a hash map to store visited values and their indices.
// function twoSum(arr, target){
//     const map={}
//     for(let i=0;i<arr.length;i++){
//         const complement=target-arr[i]
//         if(map[complement]!==undefined){
//             return [map[complement],i]
//         }        map[arr[i]]=i
//     }

// }
// const arr=[2,7,11,15]
// const target=13
// console.log(twoSum(arr,target)) 
 
// Problem 42: Check Anagram  [Easy]
// Description: Write a function isAnagram(str1, str2)
//  that returns true if the two strings are anagrams of each other.
// Example:
// Input: 'listen', 'silent'  → Output: trueInput: 'hello', 'world'   → Output: false
// Hint: Sort both strings and compare, or use a character frequency map.
// function isAnagram(str1, str2){
//     const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
//     return normalize(str1) === normalize(str2);
// }
// console.log(isAnagram("hello","world"))

 
// Problem 43: Find Missing Number  [Easy]
// Description: Given an array of n-1 integers from 1 to n
//  with one number missing, write a function findMissing(arr, n) to find the missing number.
// Example:
// Input: [1,2,4,5], n=5  → Output: 3
// Hint: Use the formula: expected sum = n*(n+1)/2, then subtract actual sum.
// function findMissing(arr, n){
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = arr.reduce((sum, num) => sum + num, 0);
//     return expectedSum - actualSum; 
// }
//     const arr=[1,2,4,5]
//     const n=5
//     console.log(findMissing(arr,n))

// Problem 44: Valid Parentheses  [Medium]
// Description: Write a function isValidParentheses(str)
//  that returns true if the string has valid, balanced parentheses, brackets, and braces.
// Example:
// Input: '()[]{}'  → Output: trueInput: '([)]'    → Output: false
// Hint: Use a stack (array). Push opening brackets, pop and compare for closing ones.
// function isValidParentheses(str){
//     const stack = [];
//     const pairs = { ')': '(', ']': '[', '}': '{' };
//     for (let char of str) {
//         if (['(', '[', '{'].includes(char)) {
//             stack.push(char);
//         } else if ([')', ']', '}'].includes(char)) {
//             if (stack.pop() !== pairs[char]) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;

// }
// console.log(isValidParentheses("()[)}[]"))
 
// Problem 45: Binary Search  [Medium]
// Description: Write a function binarySearch(arr, target) 
// that searches a sorted array and returns the index of the target, or -1 if not found.
// Example:
// Input: [1,3,5,7,9], target=7  → Output: 3
// Hint: Use left and right pointers; check the middle element each iteration.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;

}
const arr = [1, 3, 5, 7, 9];
const target = 56;
console.log(binarySearch(arr, target))

