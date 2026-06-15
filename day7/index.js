// Problem 31: Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function 
// that delays invoking fn until after delay milliseconds 
// have elapsed since the last time it was called.
// Example:
// const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.
// function debounce(fn, delay){
//     let timeoutId;
//     return function(...args) {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             fn.apply(this, args);
//         }, delay);
//     }   
// }
// function search(query) {
//     console.log("Searching for:", query);
// }
// const debouncedSearch = debounce(search, 300);
// debouncedSearch("Hello");  

// Problem 32: Throttle Function  [Medium]
// Description: Write a throttle(fn, limit) function that
//  ensures fn is called at most once every limit milliseconds.
// Example:
// const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll
// Hint: Track the last call time with Date.now().
function throttle(fn, limit) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn.apply(this, args);
        }
    }
}
function onScroll() {
    console.log("Scroll event fired");
}   

const throttledScroll = throttle(onScroll, 200);
