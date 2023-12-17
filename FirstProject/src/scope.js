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


// function generateRandomNumbers(){
//     /** generates 10 random numbers between 0 and 1 */
//     let count = 0
//     let randomNumbers = []
//     while(count < 10){
//       randomNumbers.push(Math.random())
//       count +=1
//     }
//     return randomNumbers
//   }
  
// console.log(generateRandomNumbers())




//                   PERSONAL PRACTICE ON SCOPE
// A variable declared at the top of a program or outside of a function is considered 
//a global scope variable.
//  Let's see an example of a global scope variable.
let a = "hello"
let anonmyous = function (){
    console.log(a);
}
//In the above program, variable a is declared at the top of a program and is a global variable. 
//It means the variable a can be used anywhere in the program.
// program to show the change in global variable

 // the value of a varaiable can also be changed inside a program



 //In the above program, variable a is a global variable. The value of a is hello. 
 //Then the variable a is accessed inside a function and the value changes to 3.
//Hence, the value of a changes after changing it inside the function.

//note:
//In JavaScript, a variable can also be used without declaring it.
 //If a variable is used without declaring it,
 //that variable automatically becomes a global variable.

 //Local Scope
//A variable can also have a local scope, i.e it can only be accessed within a function.
function greet (){
    let b = "world"
    console.log(a+b);
}

//let is Block Scoped
//The let keyword is block-scoped (variable can be accessed only in the immediate block).
a = "hello";
function greet(){
//local variable
let b ="word";
console.log(a +'' + b);
if (b == 'world'){
    //blocked scope variable
    let c = 'hello'
    console.log(a + '' +b+ '' + c);

}
//variable c cannot be accessed here
console.log(a + '' + b + '');
}

//local Scope
functionaddNumberS (n1, n2);{
let result = n1 + n2;
console.log(result);
}
//Global scope
let message = "hello"
function changeGreeting(){
    message = "how are you";
}
console.log(message);
changeGreeting();
console.log(message);


let scout = ['23', 'may', 'edge']
scout.push('23')
