// Problem 51: Longest Consecutive Sequence  [Hard]
// Description: Given an unsorted array of integers nums, write a 
//  function longestConsecutive(nums) that returns the 
// length of the longest consecutive elements sequence.
//  Your algorithm must run in O(n) time complexity.
// Example:
// Input: [100, 4, 200, 1, 3, 2] → Output: 4  (because the longest consecutive sequence is [1, 2, 3, 4])
// Hint: Use a Hash Set to store all numbers. Loop through the set and check if (num - 1) exists to find the start of a sequence.
// function longestConsecutive(nums){
//     const numSet = new Set(nums);
//     let longestStreak = 0;
//     for (const num of numSet) {
//         if (!numSet.has(num - 1)) { 
//             let currentNum = num;
//             let currentStreak = 1;
//             while (numSet.has(currentNum + 1)) { 
//                 currentNum++;
//                 currentStreak++;
//             }
//             longestStreak = Math.max(longestStreak, currentStreak);
//         }
//     }
//     return longestStreak;

// }
// const input = [100, 4, 200, 1, 3, 2];
// console.log(longestConsecutive(input)); 

// Problem 52: Merge Overlapping Intervals  [Medium]
// Description: Given an array of intervals where intervals[i] = [start, end], write a
//  function mergeIntervals(intervals) that merges all overlapping 
// intervals and returns the merged array.
// Example:
// Input: [[1,3], [2,6], [8,10], [15,18]] → Output: [[1,6], [8,10], [15,18]]
// Hint: Sort the intervals by their start time, then iterate and compare the current interval's start with the previous interval's end.
// function mergeIntervals(intervals) {
//     if (intervals.length === 0) return [];
//     intervals.sort((a, b) => a[0] - b[0]);
//     const merged = [intervals[0]];  
//     for (let i = 1; i < intervals.length; i++) {
//         const lastMerged = merged[merged.length - 1];
//         const current = intervals[i];
//         if (current[0] <= lastMerged[1]) {
//             lastMerged[1] = Math.max(lastMerged[1], current[1]);
//         }
//         else {
//             merged.push(current);
//         }
//     }
//     return merged;

// }
// const input = [[1,3], [2,6], [8,10], [15,18]];
// console.log(mergeIntervals(input));


// Problem 53: Implement Debounce  [Medium]
// Description: Write a custom debounce function debounce(func, delay) 
//  that delays the execution of func until after delay milliseconds
//  have elapsed since the last time it was invoked.
// Example: 
// const efficientSearch = debounce(searchAPI, 500);
// Hint: Use closures and timers (setTimeout and clearTimeout). Clear
//  the old timer every time the function is called again.

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }
        , delay);
    };
}

function searchAPI(query) {
    console.log(`Searching for: ${query}`);
}
const efficientSearch = debounce(searchAPI, 500);

efficientSearch("Hello, World!");