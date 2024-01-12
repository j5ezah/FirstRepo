//  concept of functional programming in js. (map|filter|reduce)//

//filter//
//As the name suggests, this filters the array.
//The condition here is a function that gets each
//  item of the array, and it should decide whether to keep 
//  the item or not and return the truthy boolean value for that.//
//example//
let filterEven = x => x%2 === 0;
[1,2,3].filter(filterEven);

//map//
//mapper is a function that takes an item of an array as input and returns the output
let double = x => 2 * x;
[1,2,3].map(double);

//reduce
//reducer is a function that takes the accumulated value and 
// the next item in the array and returns the new value. 
// It is called like this for all values in the array, one after another.
//example
let sum = (accumulatedSum, arrayItem) => accumulatedSum + arrayItem
[1,2,3].reduce(sum)


let hydroPower = y => 18 + y;
[3,9,18].map(hydroPower)

/** 
 * Assginment
 * ------------
 * 
 *1. create an array as this = ["Leopard", "Lion", "Hen", "Goat", "Cow"]
  2. filter the array, and return a new array containing any word that has the letter "e"
  3. Also, return another array from the filter containing the letter "n"
  
  Note: ensure that each filtering stores the returned value into another variable.
 * 

  Assginment 2
  ---------------
  1. Create an object that represent bro Eza's family
  2. Destructure the object to extract the name of the father and mother
  3. Console those names into the terminal.
*/

function animalFilter(animal){
    return animal.includes("e")
}

function animalFilterO(animal){
    return animal.includes("o")
}
function animalFilterNR(animal){
    return animal.includes("n") || animal.includes("r")
}

let animalKingdom = ["Leopard", "Lion", "Hen", "Goat", "Cow"]
let animalsWithLetterE = animalKingdom.filter(animalFilter)
let animalsWithLetterN = animalKingdom.filter(animalFilterN)
let animalWithLetterO = animalKingdom.filter(animalFilterO)
let animalWithLetterNR = animalKingdom.filter(animalFilterNR)

function animalFilterN(animal){
    return (animal.includes("i") || animal.includes("a"))
}


// console.log(animalsWithLetterE, animalsWithLetterN, animalWithLetterNR)

let ezahPearlFamily={
    family: "ezah",
    husband: "ikechukwu",
    wife: "pearl",
    child: "jace"
}
let {husband, wife, child} = ezahPearlFamily
console.log(husband,wife, child)
/**
 * `reduce` method on javascript array
 * 
 * Task
 * ----------
 * Given an array as this ["hello there, "],
 * 1. let your default accumulated value be "Jonathan"
 * 2. reduce the value in the array to a single string value, such that the resulting value becomes: "hello there, Jonathan"
 * 
 */
let sayAGreeting = ["hello there, "]

function reducerFunc2(acc,item){    
    acc = acc + item
    return acc
}


let generalGreetings = sayAGreeting.reduce(reducerFunc2, "Jonathan")
let [jonh, remaininValue] = [generalGreetings.slice(0, generalGreetings.indexOf("hello")), generalGreetings.slice("hello there", generalGreetings.length)]
let correctFormat = remaininValue.replace("Jonathan", "") + jonh
console.log(correctFormat)


let myArray = ["H","e","l","l","o"]

function reducerFunc(acc, item){
    acc = acc + item
    return acc
}

let aggregatedValue = myArray.reduce(reducerFunc, "Hey ")
// console.log(aggregatedValue)


