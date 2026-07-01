// Problem 66: Check if a String is an Isogram  [Easy]
// Description: An isogram is a word that has no repeating letters, consecutive or 
//  non-consecutive. Write a function isIsogram(str) that takes a string and returns 
//  true if it is an isogram, and false if it is not. Ignore letter case.
// Example:
// Input: "Dermatoglyphics" → Output: true | Input: "moose" → Output: false
// Hint: Convert the entire string to lowercase first. Then, convert the string into a Set. If the size of the
//  Set matches the length of the original string, it means there are no duplicate letters!
 function isIsogram(str){
    const lowerStr = str.toLowerCase();
    const charSet = new Set(lowerStr);
    return charSet.size === lowerStr.length;
    if (str.length === 0) {
        return true;
    }   
    else {
        return false;
    }   
    
 }
 console.log(isIsogram("Dermatoglyphics")); 