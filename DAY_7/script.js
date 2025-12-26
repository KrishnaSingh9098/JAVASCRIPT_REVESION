// && (AND) operator
// Dono conditions true hongi tabhi result true hoga

console.log(true && true)
// true → dono true hain

console.log(true && false)
// false → ek false hai

console.log(10 > 5 && 5 > 2)
// true → dono conditions true hain

console.log(10 > 5 && 5 > 20)
// false → ek condition false hai



// || (OR) operator
// Agar ek bhi condition true ho jaye to result true hota hai

console.log(true || false)
// true → ek true hai

console.log(false || false)
// false → dono false hain

console.log(10 < 5 || 8 > 3)
// true → ek condition true hai

console.log(5 < 2 || 3 > 10)
// false → dono conditions false hain



// ! (NOT) operator
// Result ko ulta kar deta hai

console.log(!true)
// false → true ka opposite

console.log(!false)
// true → false ka opposite

console.log(!(10 > 5))
// false → 10 > 5 true tha, NOT ne false bana diya



// Real-life example (Age & Permission)

const age = 20;
const hasID = true;

console.log(age >= 18 && hasID)
// true → age bhi sahi hai aur ID bhi hai



// Login example

const usernameCorrect = false;
const passwordCorrect = true;

console.log(usernameCorrect || passwordCorrect)
// true → ek cheez sahi hai



// NOT with comparison
const isLoggedIn = false;

console.log(!isLoggedIn)
// true → user logged in nahi hai




const userAge = 22

// School student: age 5 se 18 ke beech
const isSchoolStudent = (userAge >= 5) && (userAge <= 18)
// 22 >= 5 → true
// 22 <= 18 → false
// true && false → false

// College student: age 18 se 24 ke beech
const isCollegeStudent = (userAge >= 18) && (userAge <= 24)
// 22 >= 18 → true
// 22 <= 24 → true
// true && true → true

// Student hai ya nahi (school OR college)
const isStudent = isSchoolStudent || isCollegeStudent
// false || true → true



// AND (&&) operator first falsy value return karta hai
const andResult = 0 && 2
// 0 is falsy → result = 0

// OR (||) operator first truthy value return karta hai
const orResult = 0 || 2
// 0 falsy hai, 2 truthy → result = 2



const andResult2 = '' && 'Hello'
// '' is falsy → result = ''

const orResult2 = '' || 'Hello'
// '' falsy hai → 'Hello' truthy → result = 'Hello'



const andResult3 = 'Hello' && null
// 'Hello' truthy hai → next value check hogi
// null falsy hai → result = null

const orResult3 = 'Hello' || null
// 'Hello' truthy hai → wahi return ho gaya



const andResult4 = 'Hello' && -4 + 4
// 'Hello' truthy
// -4 + 4 = 0 (falsy)
// result = 0

const orResult4 = undefined || 4 + 8 * 5
// undefined falsy
// 8 * 5 = 40, 4 + 40 = 44
// result = 44



const andResult5 = 'Hello' && console.log('hello1')
// 'Hello' truthy hai → console.log chalega
// output: hello1
// console.log ka return value = undefined
// result = undefined

const orResult5 = undefined || console.log('hello2')
// undefined falsy hai → console.log chalega
// output: hello2
// result = undefined
