// Problem 66: Check if a String is an Isogram  [Easy]
// Description: An isogram is a word that has no repeating letters, consecutive or 
//  non-consecutive. Write a function isIsogram(str) that takes a string and returns 
//  true if it is an isogram, and false if it is not. Ignore letter case.
// Example:
// Input: "Dermatoglyphics" → Output: true | Input: "moose" → Output: false
// Hint: Convert the entire string to lowercase first. Then, convert the string into a Set. If the size of the
//  Set matches the length of the original string, it means there are no duplicate letters!
//  function isIsogram(str){
//     const lowerStr = str.toLowerCase();
//     const charSet = new Set(lowerStr);
//     return charSet.size === lowerStr.length;
//     if (str.length === 0) {
//         return true;
//     }   
//     else {
//         return false;
//     }   
    
//  }
//  console.log(isIsogram("Dermatoglyphics")); 


// Problem 67: Distribute Candies  [Easy]
// Description: Alice has n candies, where the ith candy is of type candyType[i]. Alice 
//  noticed that she started to gain weight, so she visited a doctor. The doctor advised 
//  Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her 
//  candies very much, and she wants to eat the maximum number of different types of candies 
//  while following the doctor's advice. Write a function distributeCandies(candyType) 
//  that returns the maximum number of different types of candies she can eat.
// Example:
// Input: [1, 1, 2, 2, 3, 3] → Output: 3 
//  (She has 6 candies and can eat 6 / 2 = 3 candies. There are 3 unique types [1, 2, 3], so she can eat all unique types)
// Hint: Find the number of unique candy types using a Set. The maximum unique candies she can eat will be the minimum
//  value between the total unique types and the allowed limit (candyType.length / 2). Use Math.min().
function distributeCandies(candyType) {
    const uniqueCandies = new Set(candyType);
    const maxCandies = candyType.length / 2;
    return Math.min(uniqueCandies.size, maxCandies);
    for (let i = 0; i < candyType.length; i++) {
        if (candyType.length === 0) {
            return 0;
        }   
        else {
            return 1;
        }

    }

}
console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
