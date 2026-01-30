

// Question: 1 :Check If a Number is greater than ONe number to another number ? 

let a =5;
let b =10;

if(a > b){
    console.log("A is Greater Than B")
}
else{
    console.log("B is greater than A")
}

// Question : 2 : Check if a String is Equal to a Another One String ?

let userNAme = "Krishna"
let Sirname = "Singh"

if(userNAme === Sirname) console.log("Yes Is it equal Strings")
    else console.log("Not equal Strings")


// Question : 3: Check if a Variable is Number Or Not ?


let number= 69
if(typeof number === 'number') {
    console.log("This Is a  Number")
}
else{
    console.log("This was not a number")
}

// Question : 4:Check if a boolean value is true or false ? 

let op = false;

if(op ){
    console.log("Op is Ready")
}else  console.log("OP is Not ready")


// Quaetion : 5: Check If a Array is Empty or Not ? 


let arr1 = []
console.log(arr1.length)
if(arr1.length === 0){
    console.log("Arr is Empty")
}else console.log("Arrauy is not Empty")