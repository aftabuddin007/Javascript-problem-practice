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

function countVowels(str){
const sentence = str.toLowerCase();
    let count = 0 ;
const vowels = ['a', 'e', 'i', 'o', 'u'];
   for(let i = 0 ; i < sentence.length ; i++){
if(vowels.includes(sentence[i])){
    count++;
}

      }
      return count;
}
console.log(countVowels('Welcome'))