function perFormGreeting(){
    return "I called my function here..."
}



// console.log(perFormGreeting())


function cook(){
    let stove = "A stove"
    let water = "water"
    let pot = "Pot"

    return "I am cooking food with " + stove + ", " + pot + " and " + water 
}

let cookedValue = cook()
console.log(cookedValue)



// declare a function to cook noodles

function noodles(pot, oil, onions, mangi){
    
    return "i am cooking noodles with " + pot + "," + oil + "," + onions + " and " + mangi 
}
console.log(noodles("black pot", "red oil", " blue onion", "flavoured mangi"))



function playFootball(ball, numberOfPlayers){
    if(numberOfPlayers >= 2){
        return numberOfPlayers + " players are playing " + ball
    }
}


console.log(playFootball("kaka", 2))

function evenNumbers(numArray){
    return numArray.filter(function(num){
        return num % 2 == 0
    })
}

console.log(...evenNumbers([1,2,3,4,5,6,7,8]))

/**
 * Assignment
 * -------------
 * Learn about default parameters to functions
 */

function multiply(a, b=1) {
    return a*b;
}
console.log(multiply(5,2));
console.log(multiply(5))
function preFilledArray(x, y) {
    return x+y
}
console.log(preFilledArray());


function sum(x= 3, y=5) {
    return x + y;
}

console.log(sum(5, 15));  
console.log(sum(7));        
console.log(sum());     


// In the above example, the default value of x is 3 and the default value of y is 5.
// sum(5, 15) - When both arguments are passed, x takes 5 and y takes 15.
// sum(7) - When 7 is passed to the sum() function, x takes 7 and y takes default value 5.
// sum() - When no argument is passed to the sum() function, x takes default value 3 and y takes default value 5.

