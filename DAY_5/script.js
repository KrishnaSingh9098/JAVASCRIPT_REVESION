let a = Boolean(0)
console.log(a)      // false → 0 is a falsy value

let b = Boolean(NaN)
console.log(b)      // false → NaN is falsy

let c = Boolean(2)
console.log(c)      // true → non-zero number is truthy

let d = Boolean(0.0008)
console.log(d)      // true → non-zero number is truthy

let e = Boolean('')
console.log(e)      // false → empty string is falsy

let f = Boolean('     ')
console.log(f)      // true → string with spaces is not empty

let g = Boolean(-0)
console.log(g)      // false → -0 is same as 0 (falsy)

let h = Boolean(!0)
console.log(h)      // true → !0 means not false
