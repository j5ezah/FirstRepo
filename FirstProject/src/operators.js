// Operators in javascript
// * -----------------------
// * Operators help to perform various operations on data types.
// * Types and Examples of operators:
// * 1. Comparison operators:
// *    a. >
// *    b. < 
// *    c. == (Checks for equality by values of the objects alone)
// *    d. === (Checks for equality by values and type of objects)
// *    e. !=
// *    f. >=
// *    g. <=
// *    h. Object.is() //identity checking method
// * 
// * 2. Arithmetic operators:
// *    a. *
// *    b. **
// *    c. +
// *    d. /
// *    e. -
// *    f. %
// * 
// * 3. Assignment operators:
// *    a. =
// * 
// *    //Augumented Assignment Operators
// *    b. += 
// *    c. -=
// *    d. /=
// *    e. %=
// * 
// * 
// *// 4. Logical operators:
// // *    a. && (and)
// *    b. || (or)
// *    c. ! (not)

/**
* class activities on JavaScript objects
* 
* 
* 1. Create an object which models a football team
* 2. Assign all the desired properties to the object.
* 3. access and console four of the properties you give to your object.
* 
* l
*/
let premierLeague = {
country : "uk",
numberOfClub : "20",
TopTeam : "mancity",
lowestTeam : "shefieldUnited",
highestWinners : "man U",
worldRanking : " no 1",
BestCoach : "ferguson",
}

console.log(premierLeague.country)
console.log(premierLeague.BestCoach)
console.log(premierLeague.TopTeam)
console.log(premierLeague.worldRanking)


// Arithmetic operators example
let someNumber = 24
let secondNumber = 6
let littelNumber = 5
console.log(someNumber % littelNumber)
let result = someNumber * secondNumber
console.log(result)
/console.log(someNumber)

/** Assignments on operators:
* 1. Declare two variables having different numbers assigned.
* 2. Use all the available arithmetic operators on both variables you declared!
* 3. At each stage of usage, log the value into the console.
* 4. Make a few research on the other operators given above!
*/
let john = 35
let jace = 2
let michael = 5
let ruddy = 16
 console.log(john)
 console.log(jace)
console.log(michael)
 console.log(ruddy)
console.log(john / michael)
console.log(ruddy + john)
console.log(ruddy * michael)
console.log(ruddy % michael)
console.log(ruddy ** jace)
console.log(john - ruddy)
/**
* 
* 
* 
* 
*/
let hour = false;
let minute = false;
let otherOne = true
let otherTwo = true


// console.log(hour || minute)
console.log(minute && otherOne)
console.log(otherTwo && hour || otherOne && minute || hour)
console.log(otherOne || otherTwo || minute && minute && hour && minute || hour)
console.log(minute || hour || hour && otherTwo && minute && otherOne || otherOne)
console.log(otherOne && otherTwo || minute && hour || hour)
console.log(otherOne && minute || minute && hour || hour)
// hour = hour + minute


//LOGICAL "NOT" OPERATOR EXAMPLES!
 let glass =  true; television  = false;
console.log(!glass);
console.log(!television);


// assigment operators
let a = 5; let b = 2; let c = 'hello'
//comparison operators
console.log(a == 5);
console.log(b == '2');
 console.log (c == 'hello');
//not equal to operator

 let sun = 3, moon = 'hello';
console.log(sun != 2);
console.log(moon != 'hello');

//strict equal to operator

// let back = 2
console.log(back === 2);
console.log(back === '2')

// strict not equal to operator

 let adam = 2, eve = 'hello'
console.log(adam !== '2');
console.log(adam !== '2');
console.log(eve !== 'hello');

// greater than operator

let brack = 3;
console.log(brack > 2);

// greater or equal to
 let bottle = 3;
 console.log(bottle >= 3);

// less than operators
let house = 3,  curtain = 2;
 console.log(house < 2);
 console.log(curtain < 3);

 //less than or equal to operator
 let chair = 3;
 console.log(chair <= 3);
 console.log(chair <= 2);
 //The concept of "Truthy" and "Falsy" in programming.

/**
* The main goal of this concept is to help identify which expression evaluates to either "true" or "false"
* in a program (written by you or someone else -- javascript for now.)
* 
* On the basic level, "truthy" and "falsy" checks are mostly against objects created by the data types of our programming language
*/


// let myCustomArray = []
/**
* Conditional Statements
*-----------------------
 Conditional statements help perform operations in our programs based on whether certain conditions are met.
 let randomArr = []
 if(randomArr){
   console.log("there are things in the array")
 }

 Types:
 1. if ()
 2. else if ()
 3. else ()

Example:
Consider a situation where you have to go to a firend's party on a Saturday.
Now, the Saturday arrives, but the rain started falling on this day.
For you not to miss your friends party, there are 2 options available:
1. Your friend would send a car to pick you up
2. Your Mechanic would bring your previously faulty car which he has repaired
Tasks:
  a. check if your friend sends you a car to pick you up. If he does, go to the party. Or
  b. check if your mechanic brings your car. If he does, go to the party.
  c. if none of those were true, don't go to the party.
*/


const PARTY_OF_FRIEND = true
const RAIN_FALLING = true

let friendCarAvailable = false
let myCarRepaired = true


if(friendCarAvailable){
 console.log(`I'm going to my friend's party!`)
}
else if(myCarRepaired){
 console.log(`I'm going to my friend's party!`)
}
else{
 console.log(`I'm not going to the party because there is no car available!`)
}

/**
* Assignment
* ------------------
* Problem Statement:
* 
* You wake up on one morning feeling very hungry.
* There are no food at home to eat, you can't make a transfer to a vendor, and you have no ATM card; hence, you only have 3 options to survive that morning:
*    a. You should visit your reliable friend to eat at his home, ONLY if he is at home.
*    b. You should find an ongoing party in your area, dress up and attend for the food shared.
*    c. You should wait till your wife arrives from her travel with groceries to make some food.
* 
* Tasks:
*    a. check whether your friends is around. If so, log "I will eat at my friend's house" into the console.
*    b. check if there is an ongoing party in your area. If so, log "I will eat at the party" into the console.
*    c. confirm if your wife is still coming back from her travel on that same day she mentioned. If so, log "I will eat at my home" into the console.
*    d. if none of the conditions above are true, log "This one na die oh!" into the console.
*/  

//assignment 1
// let friendIsHome = false
// let thereIsPartyToday = false
// let wifeArrivalToday = false

 if(friendIsHome){
   console.log(`I will eat at my friend's house`)
 }
 else if(thereIsPartyToday){
  console.log(`I will eat at the party`)
 }
else if(wifeArrivalToday){
console.log(`I will eat at my home`)
}
 else{
  console.log("This one na die o!")
 }


// assignment 2

let friendIsHome = false
let thereIsPartyToday = false
let wifeArrivalToday = true

if(friendIsHome){
 console.log(`I will eat at my friends's house`)
}
else if(thereIsPartyToday){
 console.log(`I will eat at the party`)
}
else if(wifeArrivalToday){
 console.log(`I will eat at home`)
}
else{
 console.log(`This one na die oh!`)
}
// array

//or Arrays

//  * 1. create an array in a variable.
//  * 2. store three items in the array, namely: "Jace", 25, "happiness"
//  * 3. push the word: "mood" into the array.
// *//
let myPower  = ['jace', 25, 'happiness']
 myPower.push("mood", "anotherPush", "whateverPush")
console.log(myPower)

/**
* Assignment (3/12/2023)
* ----------
let father = true
* let mother = true
* let children = false
* let family = father && mother && children
* -------------------------------------------
* let ceoIsAvailable = true
* let workersAvailable = false
* let companyBuilding = true
* --------------------------
* 
* Task1
* -----
* 1. check if father and mother are available. If so, log "family is almost complete" into the console.
* 2. otherwise, check if either only father or mother is available. If so, log "no family yet" into the console.
* 3. otherwise, log "Either family is empty or the full family available" into the console.
* 
* 
* 
* Tast2
* -----
* 
*/
let father = true
 let mother = true
 let children = false
 let family = father && mother && children

 if(father && mother){
   console.log("family is almost complete")
 }
 else if(father || mother){
   console.log("no family yet")
}
else{
console.log(" Either family is empty the full family available")
}

let perf = 9
if(perf < 10 || perf > 18){
console.log('The office is closed.');
}

 let hours = 12
 if(hours < 10 || hours > 18){
   console.log("The office is closed.");
 }

 let hourse = 12 
let minutes = 30
if(hourse == 12 && minutes == 30){
  console.log('The time is 12:30');
}
