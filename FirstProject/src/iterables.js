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
/**
 * Assignments
 * ------------------
 * 1
 * ---
 * a. Declare a variable of custom string values as the iterables e.g let someString = "wshatever"
 * b. Declare another variable of empty array
 * c. Loop through each substring in the iterables
 * d. Append each substring to the array you declare earlier
 * e. At the end of the loop, console the total length of the array.
//
//*
 * 2
 * ----
 * 
 * 
* a. Declare a variable that stores an array of numbers
  b. Loop through the array, and for each iteration,
  c. Remove the number from the initial array.
 */

  let greenEnergy = " solar panel is good for power generatuon"
  let powerHouse = []
  for(let item of greenEnergy){
    powerHouse.push(item)
  }
  console.log(powerHouse.length)

let plentyNumbers = [ 1,4,7,3,8,9,2]
    for(let item of plentyNumbers){
        console.log(item)
    }



/**
 * 1.
 * 
 * Given an array of strings as this: ["y", "o", "u", " ", "a", "r", "e", " ", "g", "r", "e", "a", "t"]
 * a. loop through the array, 
 * b. concatenate each string in the array to form a single value as "YOU ARE GREAT", in upper case as seen here. 
 * 
 * -------------------------------------------------
 **/
let arrayOfStrings = ["y", "o", "u", " ", "a", "r", "e", " ", "g", "r", "e", "a", "t"]

function convertToUpperString(arr){
    let convertedStrings = arr.toString().replaceAll(",", "")
    return convertedStrings.toUpperCase()
}

//* 2.
//  * 
//  * a. create a function that accepts a string as a value.
//  * b. return the total length of the string input
//  * cat
//  * 

function oddNmuber(stingyMan){
    return stingyMan.length
}

//* 3.
//  * -------------------------
//  *   creat
//  * a. create a function that takes a random string value.
//  * b. within the function, check if the length of the string input is greater or equal to 5.
//  * c. if the above is true, return the value `the length of the input value is ${nameOfTheStringInputVar}`rrttee
//  */

function sunnyDay(monday){
    let itemLength = monday.length
    if(itemLength >=5){
        return `the length of the input value is ${itemLength}`
    }
}

let customStringValues = "Andrew and James are best friends" 
let emptyArray = []
for(let item of customStringValues){
    emptyArray.push(item)
}
console.log(emptyArray.length)

let arrayOfNumbers= [1,3,7,8,9]
for(let item of arrayOfNumbers)
console.log(arrayOfNumbers)
console.log(convertToUpperString(arrayOfStrings))
console.log(sunnyDay("This is a test things"))
