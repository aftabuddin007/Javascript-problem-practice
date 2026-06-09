// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

// function reverseString(str){
// return str.split('').reverse().join('')
// }
// console.log(reverseString('Welcome to JavaScript!'))

// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns
//  the number of vowels (a, e, i, o, u) in a string.
// Example:
// Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.

// function countVowels(str){
// const sentence = str.toLowerCase();
//     let count = 0 ;
// const vowels = ['a', 'e', 'i', 'o', 'u'];
//    for(let i = 0 ; i < sentence.length ; i++){
// if(vowels.includes(sentence[i])){
//     count++;
// }

//       }
//       return count;
// }
// console.log(countVowels('Welcome'))

// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns
//  true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.

// function isPalindrome(str){
//     const sentence = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversed = sentence.split('').reverse().join('');
//     return sentence === reversed;

// }
// console.log(isPalindrome("Welcome"))
// console.log(isPalindrome("racecar"))

// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str)
//  that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

// function titleCase(str){
//     const word =str.split(' ');
//     const capitalizedWords = word.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     return capitalizedWords.join(' ');

// }
// console.log(titleCase('welcome to javascript'))

// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char)
//  that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.
function countChar(str, char){
    const sentence = str.split(char);
    return sentence.length - 1;
}
console.log(countChar('bananaoooooo', 'o'))