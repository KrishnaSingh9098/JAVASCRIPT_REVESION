// Equality (==) → implicit conversion hoti hai
const userAge1 = '24';
const userAge2 = 24;

console.log(userAge1 == userAge2) 
// true → string '24' ko number 24 me automatically convert kar diya


// Strict Equality (===) → value + type dono same hone chahiye
const userAge3 = '24';
const userAge4 = 24;

console.log(userAge3 === userAge4) 
// false → value same hai lekin type different (string vs number)


// Explicit Conversion using +
console.log(+userAge3 === userAge4)  
// true → + ne string '24' ko number bana diya


// Explicit Conversion using parseInt
console.log(parseInt(userAge3) === userAge4)
// true → parseInt string ko number me convert karta hai



// NOT EQUAL (!=)
console.log('10' != 10)
// false → implicit conversion hui, dono equal ho gaye


// STRICT NOT EQUAL (!==)
console.log('10' !== 10)
// true → value same hai, type different hai


// GREATER THAN (>)
console.log(30 > 20)
// true → 30 bada hai 20 se


// LESS THAN (<)
console.log(10 < 5)
// false → 10 chhota nahi hai 5 se


// GREATER THAN OR EQUAL (>=)
console.log(18 >= 18)
// true → equal bhi allowed hai


// LESS THAN OR EQUAL (<=)
console.log(15 <= 20)
// true → 15 chhota hai 20 se


// String comparison
console.log('b' > 'a')
// true → alphabet order me 'b' baad me aata hai


// Comparison with boolean
console.log(true == 1)
// true → true ko 1 me convert kiya


console.log(false == 0)
// true → false ko 0 me convert kiya


console.log(true === 1)
// false → type different (boolean vs number)
