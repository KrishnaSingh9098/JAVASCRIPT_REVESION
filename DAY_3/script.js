// Basic strings
const message = 'Hello World!'
const faltuMessage = '     Hi, I am Anurag.     '

const finalMessage = faltuMessage.trim()
const finalMessageLowerCase = faltuMessage.trim().toLocaleLowerCase()
const replacedMessage = finalMessage.replace('Hi', 'Hello')
console.log(replacedMessage)

// Padding example
const lastFourDigits = '9996'
const maskedAccountNumber = lastFourDigits.padStart(16, '*')
console.log(maskedAccountNumber)

// Case conversion
const capitalMessage = message.toUpperCase()
const bankBalance = 9873

// String concatenation
const concatenatedString = `Last four digit of my account number is`.concat(' ', lastFourDigits)
console.log(concatenatedString)

// Template strings
const templateString = `My account number is ${lastFourDigits}.`
const templateString2 = `I have ₹${bankBalance} in my account.`

const ef = `${templateString} ${templateString2}`
console.log(ef)

// Old style concatenation
const addedString = 'I have ₹' + bankBalance + ' in my account.'

// String methods practice
let str = "Krishna Singh"

var i = str.toLowerCase()
console.log(i)

var a = str.toUpperCase()
console.log(a)

var b = str.trim()
console.log(b)

var c = str.charAt(0)
console.log(c)

var d = str.replace("Krishna", "Krish")
console.log(d)

var e = str.slice(0, 5)
console.log(d, e)


// =============================
// User Input (commented)
// =============================

// let fullName = prompt("Enter Your Full Name :")
// let userName = fullName + fullName.length
// console.log(userName)


// =============================
// String methods (commented)
// =============================

// let ans = str.split('i')
// console.log(ans)
// console.log(str)

// let ans = str.includes(" ")
// console.log(ans)


// =============================
// Ternary Operator
// =============================

12 > 111 ? console.log("hey") : console.log("heheheh")


// =============================
// Switch Case
// =============================

switch("Krishna"){
    case "Krish":
        console.log("You Are Krish")
        break
    case "Annu":
        console.log("You Are Anupa")
        break
    case "Akansha":
        console.log("You Are Krisna's GirlFriend")
        break
    default:
        console.log("You are not Krishna, Annu or Akansha")
}


// =============================
// Loops
// =============================

// let i = 12
// do {
//     console.log(i)
//     i++
// } while (i < 15)

// for (var i = 0; i <= 12; i++) {
//     console.log(i)
//     if (i === 8) break
// }

// for (var i = 0; i <= 12; i++) {
//     if (i === 8) continue
//     console.log(i)
// }
