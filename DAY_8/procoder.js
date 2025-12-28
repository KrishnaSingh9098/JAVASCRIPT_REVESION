console.log("Hello World");

console.log("Non Primitive Types : Objects ");

// ShortCut : ALT + SHIFT + F .  { For auto Setting with Prettier }

// const user = {
//   firstName: "Krishna",
//   lastName: "Singh",
//   Age: 22,
//   JobProfile: "HR",
//   city: "Banglore",
// }; // Key value Pairs

// console.log(user.firstName);
// console.log(user);


// const user2 = {
//   firstName: "Krishna",
//   lastName: "Singh",
//   Age: 22,
//   JobProfile: "HR",
//   city: "Banglore",
// }; 

// A simple string stored in a variable
const myName = 'Krishna';

// Empty strings (declared but not used yet)
const userName1 = '';
const userName2 = '';

// ---------------- OBJECT LITERALS ----------------
// Using object literal syntax `{}`
// NOTE: Every time we write `{}`, a NEW object is created in memory

const user1 = {
    firstName: "Krishna",  // normal key (valid identifier)
    lastName: "Singh",     // can be accessed using dot or bracket notation
};

const user2 = {
    firstName: "Akansha",
    'last-Name': "Singh",  // key with hyphen ❌ not a valid identifier
                           // MUST be accessed using bracket notation
};

// ---------------- DOT NOTATION ----------------
// Dot notation works ONLY when the key is a valid identifier

console.log(user1.firstName, user1.lastName); 
// ✅ works because both keys are valid identifiers

console.log(user2.firstName, user2["last-Name"]); 
// ❌ user2.last-Name would cause error
// ✅ bracket notation is required when key has special characters

// ---------------- BRACKET NOTATION ----------------
// Bracket notation always uses STRING keys

console.log(user1["firstName"], user1["lastName"]); 
// ✅ works fine

console.log(user2["firstName"], user2["last-Name"]); 
// ✅ correct way to access 'last-Name'

// ---------------- LOGGING OBJECTS ----------------
// Printing entire objects
// Shows that user1 and user2 are two DIFFERENT objects in memory

console.log(user1, user2);

/*
THEORY SUMMARY:

1️⃣ Object Literal:
   - `{}` creates a NEW object every time
   - user1 and user2 do NOT share memory

2️⃣ Dot Notation:
   - Used when key is a valid identifier
   - Example: firstName, lastName

3️⃣ Bracket Notation:
   - Used when:
     ✔ key has special characters (like '-')
     ✔ key comes from a variable
   - Always uses strings

4️⃣ Hyphen in Keys:
   - 'last-Name' is treated as a string key
   - Dot notation will FAIL
*/


