// Problem 56: Find the Intersection of Two Arrays  [Easy]
// Description: Write a function intersection(arr1, arr2) that returns an array of unique 
//  elements that are present in both arrays.
// Example:
// Input: [1, 2, 2, 1], [2, 2, 3] → Output: [2]
// Hint: Convert one array into a Set for fast lookups, then filter the second array to keep
//  only the elements that exist in that Set. Finally, ensure the result has unique values.
function intersection(arr1, arr2){
    const set1 = new Set(arr1);
    const result = arr2.filter(num => set1.has(num));
    return [...new Set(result)];

}
const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2, 3,1];
console.log(intersection(arr1, arr2)); 