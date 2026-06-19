// Problem 46: Count Words in a Sentence  [Easy]
// Description: Write a function wordCount(sentence) 
// that returns an object with each word as a key and its frequency as the value.
// Example:
// Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
// Hint: Split by spaces, then reduce into a frequency object.
function wordCount(sentence){
    const words = sentence.split(' ');
    const frequency = {};
    for (const word of words) {
       if (frequency[word]) {
            frequency[word] = frequency[word] + 1;
        } 
        
        else {
            frequency[word] = 1;
        } 
        }
         return frequency;
    

}
console.log(wordCount('the cat sat on the mat'));