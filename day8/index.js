// Problem 36: Safe JSON Parse  [Easy]
// Description: Write a function safeJsonParse(str) 
// that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// Example:
// safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// Hint: Use try/catch inside the function.
// function safeJsonParse(str) {
//     try {
//         return JSON.parse(str);
//     } catch (error) {        
//         return null;
//     }

// }
// console.log(safeJsonParse('{"a":1}'));  
// console.log(safeJsonParse('bad json')); 

// Problem 37: Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) 
// that calls an async function fn up to times times, retrying if it throws an error. 
// Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.
// async function retry(fn, times) {
//     for (let attempt = 1; attempt <= times; attempt++) {
//         try {
//             return await fn();
//         } catch (error) {
//             if (attempt === times) {
//                 throw error; 
//             }
//         }   
//     }
// }

// let count = 0;
// const unstableFetch = async () => {
//     count++;
//     if (count < 3) {
//         console.log(`Attempt ${count}: Failed!`);
//         throw new Error("Network Error");
//     }
//     console.log(`Attempt ${count}: Success!`);
//     return "Data fetched successfully";
// };


// async function run() {
//     try {
//         const result = await retry(unstableFetch, 3);
//         console.log("Final Result:", result);
//     } catch (err) {
//         console.log("Final Result: All attempts failed!", err.message);
//     }
// }

// run();


// Problem 38: Implement Promise.all from Scratch  [Hard]
// Description: Write a function myPromiseAll(promises) 
// that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
// Example:
// myPromiseAll([p1, p2, p3]).then(results => console.log(results));
// Hint: Track resolved count and results array; reject on first failure.
// function myPromiseAll(promises) {
  
//     return new Promise((resolve, reject) => {
//         const results = [];
//         let resolvedCount = 0;
//         promises.forEach((promise, index) => {
//         Promise.resolve(promise)
//         .then(value => {
//         results[index] = value;
//         resolvedCount++;
//         if (resolvedCount === promises.length) {
//         resolve(results);
//         }

//         })
// .catch(error => {
// reject(error)});
//         });
//     });
// }   
// // Example usage:
// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);
// myPromiseAll([p1, p2, p3]).then(results => console.log(results)) 
// .catch(error => console.error("Error:", error));

 
// Problem 39: Flatten Object (Deep)  [Medium]
// Description: Write a function flattenObject(obj)
//  that takes a deeply nested object and returns a flat object with dot-notation keys.
// Example:
// Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
// Hint: Use recursion; build the key by joining parent keys with dots.


function flattenObject(obj){
    const result = {};
    function flattenHelper(currentObj, parentKey = '') {
        for (const key in currentObj) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
                flattenHelper(currentObj[key], newKey);
            } else {
                result[newKey] = currentObj[key];
            }
        }
    }
    flattenHelper(obj);
    return result;
}

const nestedObj = {a: {b: {c: 1}}};
flattenObject(nestedObj);
console.log(flattenObject(nestedObj));