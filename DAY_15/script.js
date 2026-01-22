                                         //  Scopes In JavaScript 


const userName =  'Krishna Thakur'
const userAge = 22;
// var a =50;

function add(){
    const x =5;
    const y =5;
    console.log(x+y)
    console.log(userName)
}


function substact(){
    const x =5;
    const y =5;
    console.log(x-y)
    console.log(userName)
}

add()
substact()

console.log(userAge)

// console.log(y)
console.log("Code Ended")



// Functional Scope with VAr : 

// function functionScopeExample() {
//            var functionScopedVar = "I am function-scoped";
//            console.log(functionScopedVar); // Can access functionScopedVar inside the function
//            }

// functionScopeExample(); // Output: I am function-scoped
// console.log(functionScopedVar); // Error: functionScopedVar is not defined


// function testVar() {
//   if (true) {
//     var a = 5;
//   }
//   console.log(a); // ✅ 5 ✅ a is accessible because var ignores block scope.
// }

// testVar();
// console.log(a)   // ReferenceError: a is not defined
    
// Block Scope : 

// if (true) {
//            let blockScopedVar = "I am block-scoped";
//            console.log(blockScopedVar); // Can access blockScopedVar inside the block
//            }

// console.log(blockScopedVar); // Error: blockScopedVar is not defined


// For Lexical Scope point of view : 

function subtract() {
  const x = 15
  const y = 18
  const z = 28
  // console.log(x - y)
  // console.log(username)

  function child() {
  // debugger

    const childName = 'Golu'
    // console.log(childName);
    // console.log(x,z);

    if(true){
      let num1 = 78
      var num2 = 987
      console.log(num1);
      console.log(num2);
    }
    console.log(num2);

    function grandChild() {
      const grandChildName = 'Molu'
      // console.log(grandChildName);
    }
    grandChild()
  }


  child()

}

// add()
subtract()



