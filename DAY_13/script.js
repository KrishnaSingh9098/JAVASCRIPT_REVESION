
function one(){
    two()
}

function two(){
    three()
}

function three(){
    console.log("All Are Executed")
}

one()



// function loop(){
//     loop()
// }

// loop()   stack overflow Executed Because it was a Infinite Loop .