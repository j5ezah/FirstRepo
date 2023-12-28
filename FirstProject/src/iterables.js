/** 
* Iterables and loops
-----------------------
* Iterables are data types that can be looped over
A Loop is a process of going over something multiple times (for a number of times)
----------------------------------------------------------------------------------
Examples of iterables in javascript:
a. Arrays []
b. Strings ""
d. Objects {}
*/

let myArray = [1,2,3,4,5,6,7,8,9]
let myString = "This is Jace. She is a happy gurl"
let car = {
    manufacturer:"Toyota",
    color:"black"
}


/** There majorly 3 independent types of loops in javaScript 
 * ----------------------------------------------------------
 * 1. For loop
 * 2. while loop
 * 3. do while loop
 * 
 * 
 * Assingment
 * -----------
 * 1. Make some research on iterables and loops
 * 2. Implement some examples of the "for loop"
 * 
*/


/**quick task on for loop
 * let randomString = "This is another "
*/

// let range = {
//     from: 1,
//     to: 5
// };

// console.log


let fridge = ["Michael", "Zechariah", "Kings", "John"]
// for(let item of fridge){
//     console.log(item)
//  }

 let randomItems = ["what", "is", "happending", "?"]
/**1. loop through the items in the array above.
 * 2. for each iteration, check if the item is === "?" 
 * 3. If the above is true, console.log("end of question")
 * 4. else console.log("question is still on.")
 * */  
for(let item of randomItems){
    if(item === "?")
    console.log("end of question")
    else{
        console.log("question is still on")
    }
}
