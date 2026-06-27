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

function summaryRanges(nums) {
    const result = [];
    let start = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1 || nums[i + 1] !== nums[i] + 1) {
            if (start === nums[i]) {
                result.push(`${start}`);
            } else {
                result.push(`${start}->${nums[i]}`);
            }
            start = nums[i + 1];
        }
    }
    return result;

}
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));