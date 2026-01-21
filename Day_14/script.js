// Hoisting Revesion : 
// abcd()

// var Krishna = function abcd(){
//     console.log("Krishna")
// }



//Immediately Invoke karna (IIFE - Immediately Invoked Function Expression):

  (function() {
    console.log("I am anonymous and called immediately!");
  })();



  (function myName(name){
    console.log("Krishna"  + name)
  })("Thakur")




  let sum = (function add(a, b){
  return a + b;
})(4, 5);
console.log(sum);

(function sayHello(){
  console.log("Hello I Am IIFE");
})();

(() => console.log("Hello I am ES6 using IIFE"))();

let value = (() => 100)();
console.log(value);
