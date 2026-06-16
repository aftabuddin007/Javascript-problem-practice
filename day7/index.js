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
// function throttle(fn, limit) {
//     let lastCall = 0;
//     return function(...args) {
//         const now = Date.now();
//         if (now - lastCall >= limit) {
//             lastCall = now;
//             fn.apply(this, args);
//         }
//     }
// }
// function onScroll() {
//     console.log("Scroll event fired");
// }   

// const throttledScroll = throttle(onScroll, 200);
// Problem 33: Deep Clone an Object  [Medium]
// Description: Write a function deepClone(obj)
//  that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
// Example:
// const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
// Hint: Use recursion and check for object/array types.
// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj; // Return primitives as is
//     } 
//     if (Array.isArray(obj)) {
//         return obj.map(deepClone); // Recursively clone array elements
//     } 
//     const clonedObj = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             clonedObj[key] = deepClone(obj[key]); 
//     }
//     return clonedObj;
// }
// }
// const a = {x: {y: 8}};
// const b = deepClone(a);
// b.x.y = 98;
// console.log(a.x.y); 
 
// Problem 34: Event Emitter  [Medium]
// Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args),
//  and off(event, listener) methods.
// Example:
// const emitter = new EventEmitter();emitter.on('greet', name => console.log('Hello ' + name));
// emitter.emit('greet', 'Sara'); // Hello Sara
// Hint: Store listeners in an object where keys are event
//  names and values are arrays of functions.
//     class EventEmitter {
//     constructor() {
//         this.events = {};
//     }
// on(event, listener) {
//         if (!this.events[event]) {
//             this.events[event] = [];
//         }
//         this.events[event].push(listener);
//     }

//     emit(event, ...args) {
        
//         if (this.events[event]) {
            
//             this.events[event].forEach(listener => {
//                 listener(...args);
//             });
//         }
//     }
//     off(event, listener) {
//         if (this.events[event]) {
//             this.events[event] = this.events[event].filter(l => l !== listener);
//         }
//     }
//     }
//    const emitter = new EventEmitter();
//    emitter.on('greet', name => console.log('Hello ' + name));
// emitter.emit('greet', 'Sara')

// Problem 35: Implement Array.prototype.map from Scratch  [Medium]
// Description: Write a function myMap(arr, callback)
//  that replicates the behavior of Array.prototype.map without using the built-in map().
// Example:
// myMap([1,2,3], x => x * 2);// Output: [2, 4, 6]
// Hint: Loop through the array, apply the callback to each element, push results to a new array.
function myMap(arr, callback){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;

}
   console.log(myMap([1,2,3], x => x * 2)) ;

