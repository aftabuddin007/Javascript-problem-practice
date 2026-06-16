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
async function retry(fn, times) {
    for (let attempt = 1; attempt <= times; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === times) {
                throw error; 
            }
        }   
    }
}

let count = 0;
const unstableFetch = async () => {
    count++;
    if (count < 3) {
        console.log(`Attempt ${count}: Failed!`);
        throw new Error("Network Error");
    }
    console.log(`Attempt ${count}: Success!`);
    return "Data fetched successfully";
};


async function run() {
    try {
        const result = await retry(unstableFetch, 3);
        console.log("Final Result:", result);
    } catch (err) {
        console.log("Final Result: All attempts failed!", err.message);
    }
}

run();


