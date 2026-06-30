// Problem 61: First Letter to Appear Twice  [Easy]
// Description: Given a string s consisting of lowercase English letters, write a function 
//  repeatedCharacter(s) that returns the first character to appear twice.
// Example:
// Input: 'abccbaacz' → Output: 'c' 
//  (although 'b' and 'a' also repeat later, 'c' is the first one whose second occurrence appears)
// Hint: Use a Set to keep track of the characters you have seen so far as you loop through the string.
//  The moment you find a character that is already in the Set, return that character immediately.
// function repeatedCharacter(s){
//     const seen = new Set();
//     for (const char of s) {
//         if (seen.has(char)) {
//             return char;
//         }
//         seen.add(char);
//     }

// }
// console.log(repeatedCharacter('abccbaacz')); 

// Problem 62: Summary Ranges  [Easy]
// Description: Given a sorted unique integer array nums, write a function summaryRanges(nums) 
//  that returns the smallest sorted list of ranges that cover all the numbers in the array exactly.
// Example:
// Input: [0, 1, 2, 4, 5, 7] → Output: ["0->2", "4->5", "7"]
// Hint: Iterate through the array with a loop. Keep track of the 
// start of a range. Whenever the next number is not consecutive 
// (i.e., nums[i+1] !== nums[i] + 1), it means the current range ends. Form the string ("start->end" or just "start") 
// and push it to the result, then update the start for the next range.

// function summaryRanges(nums) {
//     const result = [];
//     let start = nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if (i === nums.length - 1 || nums[i + 1] !== nums[i] + 1) {
//             if (start === nums[i]) {
//                 result.push(`${start}`);
//             } else {
//                 result.push(`${start}->${nums[i]}`);
//             }
//             start = nums[i + 1];
//         }
//     }
//     return result;

// }
// console.log(summaryRanges([0, 1, 2, 4, 5, 7]));

// Problem 63: Find the Difference of Two Arrays  [Easy]
// Description: Given two 0-indexed integer arrays nums1 and nums2, write a function 
//  findDifference(nums1, nums2) that returns a list answer of size 2 where:
//  answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
//  answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Example:
// Input: nums1 = [1,2,3], nums2 = [2,4,6] → Output: [[1,3], [4,6]]
// Hint: Convert both arrays into Sets to remove duplicates and allow fast lookups. Then,
//  filter Set 1 to find elements missing in Set 2, and vice versa. Convert the results back to arrays.
// function findDifference(nums1, nums2){
//     const set1 = new Set(nums1);
//     const set2 = new Set(nums2);
//     const diff1 = [...set1].filter(num => !set2.has(num));
//     const diff2 = [...set2].filter(num => !set1.has(num));
//     return [diff1, diff2];
//     if (nums1.length === 0 && nums2.length === 0) {
//         return [[], []];
//     }

// }
// console.log(findDifference([1,2,3], [2,4,6]));

// Problem 64: Merge Strings Alternately  [Easy]
// Description: You are given two strings word1 and word2. Write a function mergeAlternately(word1, word2) 
//  that merges the strings by adding letters in alternating order, starting with word1. 
//  If a string is longer than the other, append the additional letters onto the end of the merged string.
// Example:
// Input: word1 = "abc", word2 = "pqr" → Output: "apbqcr"
// Input: word1 = "ab", word2 = "rs_tu" → Output: "arbs_tu"
// Hint: Use a single loop that runs up to the maximum length of both strings. Inside the loop, append the 
// character from word1 (if it exists) and then from word2 (if it exists) to a result string.
// function mergeAlternately(word1, word2){
//     let merged = '';
//     const maxLength = Math.max(word1.length, word2.length);
//     for (let i = 0; i < maxLength; i++) {
//         if (i < word1.length) {
//             merged += word1[i];
//         }
//         if (i < word2.length) {
//             merged += word2[i];
//         }
//     }
//     return merged;  

// }
// console.log(mergeAlternately("abc", "pqr"));

// Problem 65: Keyboard Row  [Easy]
// Description: Given an array of strings words, write a function findWords(words) that returns 
//  the words that can be typed using letters of only one row of American keyboard.
//  Row 1: "qwertyuiop", Row 2: "asdfghjkl", Row 3: "zxcvbnm"
// Example:
// Input: ["Hello", "Alaska", "Dad", "Peace"] → Output: ["Alaska", "Dad"]
// Hint: Define three sets or strings representing the keyboard rows. Loop through each word,
//  convert it to lower
function findWords(words){
    const row1 = new Set('qwertyuiop');
    const row2 = new Set('asdfghjkl');
    const row3 = new Set('zxcvbnm');
    const result = [];
    for (const word of words) {
        const lowerWord = word.toLowerCase();
        if ([...lowerWord].every(char => row1.has(char)) ||
            [...lowerWord].every(char => row2.has(char)) ||
            [...lowerWord].every(char => row3.has(char))) {
            result.push(word);
        }
    }
    return result;
}
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));