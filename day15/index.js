// 3. Deep Clone with Circular References and Custom Types
// Write a function deepClone(obj) that produces a full deep copy of any valid JavaScript value without using JSON.parse(JSON.stringify(obj)) or structuredClone().

// Requirements:

// Must handle primitive values, plain objects, and arrays.

// Must preserve custom object prototypes (Object.getPrototypeOf).

// Must handle circular and graph-like references using a WeakMap.

// Must properly clone Map, Set, Date, RegExp, and Symbol keys.
function deepClone(obj, seen = new WeakMap()) {
  // 1. Handle primitives (string, number, boolean, null, undefined, symbol) and functions.
  // Note: Functions are typically passed by reference in deep cloning.
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 2. Handle circular and graph-like references
  if (seen.has(obj)) {
    return seen.get(obj);
  }

  // 3. Handle specific built-in types (Date, RegExp)
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }

  // 4. Initialize the clone based on type and preserve prototypes
  let clone;

  if (obj instanceof Map) {
    // Clone Map
    clone = new Map();
    seen.set(obj, clone); // Store in WeakMap before iterating to avoid circular loops
    obj.forEach((value, key) => {
      // Keys in maps can also be objects, so we deep clone them too
      clone.set(deepClone(key, seen), deepClone(value, seen));
    });
    return clone;
  }

  if (obj instanceof Set) {
    // Clone Set
    clone = new Set();
    seen.set(obj, clone);
    obj.forEach(value => {
      clone.add(deepClone(value, seen));
    });
    return clone;
  }

  if (Array.isArray(obj)) {
    // Clone Array
    clone = [];
  } else {
    // Clone custom objects/classes and preserve their specific prototype
    const proto = Object.getPrototypeOf(obj);
    clone = Object.create(proto);
  }

  // Add the newly created object to the WeakMap BEFORE iterating over its properties
  seen.set(obj, clone);

  // 5. Clone all properties, including Symbol keys
  // Reflect.ownKeys(obj) returns both string and Symbol keys
  const keys = Reflect.ownKeys(obj);
  for (const key of keys) {
    clone[key] = deepClone(obj[key], seen);
  }

  return clone;
}
console.log(deepClone({ a: 1, b: { c: 2 }, d: new Date(), e: /abc/g, f: new Set([1, 2]), g: new Map([[1, 'one']]), h: Symbol('sym') }));