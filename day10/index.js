// Problem 46: Count Words in a Sentence  [Easy]
// Description: Write a function wordCount(sentence) 
// that returns an object with each word as a key and its frequency as the value.
// Example:
// Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
// Hint: Split by spaces, then reduce into a frequency object.
// function wordCount(sentence){
//     const words = sentence.split(' ');
//     const frequency = {};
//     for (const word of words) {
//        if (frequency[word]) {
//             frequency[word] = frequency[word] + 1;
//         } 
//         else {
//             frequency[word] = 1;
//         } 
//         }
//          return frequency;
// }
// console.log(wordCount('the cat sat on the mat'));

// Problem 47: Longest Word in a Sentence  [Easy]
// Description: Write a function longestWord(sentence) 
// that returns the longest word in a sentence. If there's a tie, return the first one.
// Example:
// Input: 'The quick brown fox'Output: 'quick'
// Hint: Split the sentence and use reduce() to track the longest.
// function longestWord(sentence) {
//     const words = sentence.split(' ');
//     let longest = '';
//     for (const word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }else{
//             longest = longest;

//         }
//     }    return longest;

// }

// console.log(longestWord('The  brown fox jumpst over the lazy dog'));
// Problem 48: Rotate an Array  [Medium]
// Description: Write a function rotateArray(arr, k) 
// that rotates an array to the right by k steps.
// Example:
// Input: [1,2,3,4,5], k=2Output: [4,5,1,2,3]
// Hint: Use slice and concat, or reverse the whole array then parts.
// function rotateArray(arr, k){
//     const n = arr.length;
//     k = k % n;
//     return arr.slice(-k).concat(arr.slice(0, n - k));

// }
// console.log(rotateArray([1,2,3,4,5], 2));
// Problem 49: Roman to Integer  [Medium]
// Description: Write a function romanToInt(s)
//  that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
// Hint: Map each symbol to its value; if 
// a smaller value comes before a larger one, subtract it.

function romanToInt(s){
    const romanMap = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];
        if (nextVal && currentVal < nextVal) {
            total -= currentVal;
        }else {
            total += currentVal;
        }
    }
    return total;
    


}
console.log(romanToInt("LVIII"));