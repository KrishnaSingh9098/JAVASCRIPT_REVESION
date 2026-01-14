 
 /* INTERVIEW QUESTION : 1 */
 
 console.log(Array.from({Name:"Krishna"}))


// Array.from() only works on:

// Array-like objects (objects with a length property), or

// Iterable objects (like arrays, strings, maps, sets)

// Your object:

// { Name: "Krishna" }


// ❌ is not iterable
// ❌ does not have a length property

// So JavaScript treats it as an array-like object with:

// length === undefined (or 0)


// 👉 Result: empty array []

// That’s why the output is:

// []



  