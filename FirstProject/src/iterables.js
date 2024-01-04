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















let customStringValues = "Andrew and James are best friends" 
let emptyArray = []
for(let item of customStringValues){
    emptyArray.push(item)
}
console.log(emptyArray.length)

let arrayOfNumbers= [1,3,7,8,9]
for(let item of arrayOfNumbers)
console.log(arrayOfNumbers)

// What is Destructuring in JavaScript?
// Imagine you want to pick out some shoes from your collection, and you want your favorite blue ones. The very first thing you have to do is to search through your collection and unpack whatever you have there.

// Now destructuring is just like that approach you took when looking for your shoes. Destructuring is the act of unpacking elements in an array or object.

// Destructuring not only allow us to unpack elements, it also gives you the power to manipulate and switch elements you unpacked depending on the type of operation you want to perform.
**//
example//

let colorArray = [ 'yellow', 'blue','red','orange','white'];
let [first, second]= colorArray;
comsole.log(first,second)

//we could swap values//
let edibles = [' fruits','food'];
let [positionone, positiontwo]= edibles
[positionone, positiontwo] = [ positiontwo, positionone];
console.log(postionone,positiontwo);

//How to mutate array in destructuring//

let edibleFood = ['food', 'fruit']
[edibleFood[0], edibleFood[1]]= [edibleFood[1], edibleFood[0]];
console.log(edibleFood);

//destructuring object//
let BrandOfCar = {
    make: 'toyota',
    color: 'red',
    tyreColor: 'black',
    yearOfProduction: '2008',
}
[make,color]=BrandOfCar
console.log(make,color)

//  concept of functional programming in js. (map|filter|reduce)//

//filter//
//As the name suggests, this filters the array.
//The condition here is a function that gets each
//  item of the array, and it should decide whether to keep 
//  the item or not and return the truthy boolean value for that.//
//example//
let filterEven = x => x%2 === 0;
[1,2,3].filter(filtereven);

//map//
//mapper is a function that takes an item of an array as input and returns the output
let double = x => 2 * x;
[1,2,3].map(double);

//reduce
//reducer is a function that takes the accumulated value and 
// the next item in the array and returns the new value. 
// It is called like this for all values in the array, one after another.
//example
let sum = (accumulatedSum, arrayItem) => accumulatedsum + arrayItem
[1,2,3].reduce(sum)