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
function findMissing(arr, n){
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum; 
}
    const arr=[1,2,4,5]
    const n=5
    console.log(findMissing(arr,n))