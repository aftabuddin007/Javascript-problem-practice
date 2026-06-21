// Problem 51: Longest Consecutive Sequence  [Hard]
// Description: Given an unsorted array of integers nums, write a 
//  function longestConsecutive(nums) that returns the 
// length of the longest consecutive elements sequence.
//  Your algorithm must run in O(n) time complexity.
// Example:
// Input: [100, 4, 200, 1, 3, 2] → Output: 4  (because the longest consecutive sequence is [1, 2, 3, 4])
// Hint: Use a Hash Set to store all numbers. Loop through the set and check if (num - 1) exists to find the start of a sequence.
function longestConsecutive(nums){
    const numSet = new Set(nums);
    let longestStreak = 0;
    for (const num of numSet) {
        if (!numSet.has(num - 1)) { 
            let currentNum = num;
            let currentStreak = 1;
            while (numSet.has(currentNum + 1)) { 
                currentNum++;
                currentStreak++;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;

}
const input = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(input)); 