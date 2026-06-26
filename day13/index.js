// Problem 61: First Letter to Appear Twice  [Easy]
// Description: Given a string s consisting of lowercase English letters, write a function 
//  repeatedCharacter(s) that returns the first character to appear twice.
// Example:
// Input: 'abccbaacz' → Output: 'c' 
//  (although 'b' and 'a' also repeat later, 'c' is the first one whose second occurrence appears)
// Hint: Use a Set to keep track of the characters you have seen so far as you loop through the string.
//  The moment you find a character that is already in the Set, return that character immediately.
function repeatedCharacter(s){
    const seen = new Set();
    for (const char of s) {
        if (seen.has(char)) {
            return char;
        }
        seen.add(char);
    }

}
console.log(repeatedCharacter('abccbaacz')); 