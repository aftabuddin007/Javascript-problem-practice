// 3. Deep Clone with Circular References and Custom Types
// Write a function deepClone(obj) that produces a full deep copy of any valid JavaScript value without using JSON.parse(JSON.stringify(obj)) or structuredClone().

// Requirements:

// Must handle primitive values, plain objects, and arrays.

// Must preserve custom object prototypes (Object.getPrototypeOf).

// Must handle circular and graph-like references using a WeakMap.

// Must properly clone Map, Set, Date, RegExp, and Symbol keys.
// function deepClone(obj, seen = new WeakMap()) {
//   // 1. Handle primitives (string, number, boolean, null, undefined, symbol) and functions.
//   // Note: Functions are typically passed by reference in deep cloning.
//   if (obj === null || typeof obj !== 'object') {
//     return obj;
//   }

//   // 2. Handle circular and graph-like references
//   if (seen.has(obj)) {
//     return seen.get(obj);
//   }

//   // 3. Handle specific built-in types (Date, RegExp)
//   if (obj instanceof Date) {
//     return new Date(obj.getTime());
//   }
  
//   if (obj instanceof RegExp) {
//     return new RegExp(obj.source, obj.flags);
//   }

//   // 4. Initialize the clone based on type and preserve prototypes
//   let clone;

//   if (obj instanceof Map) {
//     // Clone Map
//     clone = new Map();
//     seen.set(obj, clone); // Store in WeakMap before iterating to avoid circular loops
//     obj.forEach((value, key) => {
//       // Keys in maps can also be objects, so we deep clone them too
//       clone.set(deepClone(key, seen), deepClone(value, seen));
//     });
//     return clone;
//   }

//   if (obj instanceof Set) {
//     // Clone Set
//     clone = new Set();
//     seen.set(obj, clone);
//     obj.forEach(value => {
//       clone.add(deepClone(value, seen));
//     });
//     return clone;
//   }

//   if (Array.isArray(obj)) {
//     // Clone Array
//     clone = [];
//   } else {
//     // Clone custom objects/classes and preserve their specific prototype
//     const proto = Object.getPrototypeOf(obj);
//     clone = Object.create(proto);
//   }

//   // Add the newly created object to the WeakMap BEFORE iterating over its properties
//   seen.set(obj, clone);

//   // 5. Clone all properties, including Symbol keys
//   // Reflect.ownKeys(obj) returns both string and Symbol keys
//   const keys = Reflect.ownKeys(obj);
//   for (const key of keys) {
//     clone[key] = deepClone(obj[key], seen);
//   }

//   return clone;
// }
// console.log(deepClone({ a: 1, b: { c: 2 }, d: new Date(), e: /abc/g, f: new Set([1, 2]), g: new Map([[1, 'one']]), h: Symbol('sym') }));
// . Express/Koa Style Middleware Pipeline (compose)
// Implement a functional middleware composer similar to koa-compose using the "onion model" execution flow.

// Requirements:

// compose(middlewareArray) returns a function (context) => Promise.

// Each middleware is an async function: async (ctx, next) => { ... await next(); ... }.

// next() delegates execution to the subsequent middleware in the stack.

// Throw an error if next() is invoked multiple times within a single middleware.
function compose(middleware) {
  // 1. Validation: ensure middleware is an array of functions
  if (!Array.isArray(middleware)) {
    throw new TypeError('Middleware stack must be an array!');
  }
  for (const fn of middleware) {
    if (typeof fn !== 'function') {
      throw new TypeError('Middleware must be composed of functions!');
    }
  }

  return function (context, next) {
    // Last called middleware index to track multiple next() calls
    let index = -1;
    
    return dispatch(0);

    function dispatch(i) {
      // 2. Prevent calling next() multiple times within the same middleware
      if (i <= index) {
        return Promise.reject(new Error('next() called multiple times'));
      }
      
      index = i;
      let fn = middleware[i];
      
      // If we've reached the end of the middleware stack, resolve the optional baseline next function
      if (i === middleware.length) {
        fn = next;
      }

      // If no more middleware or baseline next function exists, resolve successfully
      if (!fn) {
        return Promise.resolve();
      }

      try {
        // 3. Execute the current middleware, passing the context and the bound next dispatch function
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
Example Usage & "Onion Model" Demonstration
Here is how you can use the composed middleware to see the classic Koa onion-skin execution flow (executing code before and after await next()):

JavaScript
async function main() {
  const stack = [
    async (ctx, next) => {
      console.log('1. Start Middleware 1');
      await next();
      console.log('6. End Middleware 1');
    },
    async (ctx, next) => {
      console.log('2. Start Middleware 2');
      await next();
      console.log('5. End Middleware 2');
    },
    async (ctx, next) => {
      console.log('3. Start Middleware 3 (Core Handler)');
      ctx.body = 'Hello, World!';
      // await next() here triggers the end of the array, or we can omit it if it's the last one
    }
  ];

  const app = compose(stack);
  const context = { req: {}, res: {} };

  await app(context);
  console.log(`Final Response Body: ${context.body}`);
}

main();