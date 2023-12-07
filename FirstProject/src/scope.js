/**
 * Scope
 * ---------
 * The concept of scope helps us to identify which variable is available to us in our execution context
 * 
 */


const VAR_ONE = "this is var one"
let variableDeclaredInGlobalScop = "global variable declared"

// if(VAR_ONE){
//     // console.log(variableDeclaredInGlobalScop)
//     const book = "a book"
// }


function generateRandomNumbers(){
    /** generates 10 random numbers between 0 and 1 */
    let count = 0
    let randomNumbers = []
    while(count < 10){
      randomNumbers.push(Math.random())
      count +=1
    }
    return randomNumbers
  }
  
console.log(generateRandomNumbers())
