// What is Destructuring in JavaScript?
// Imagine you want to pick out some shoes from your collection, 
// and you want your favorite blue ones. 
// The very first thing you have to do is to search through
//  your collection and unpack whatever you have there.

// // Now destructuring is just like that approach you took when looking for your shoes.
//  Destructuring is the act of unpacking elements in an array or object.

// // Destructuring not only allow us to unpack elements, 
// it also gives you the power to manipulate and 
// switch elements you unpacked depending on the type of operation you want to perform.


let colorArray = [ 'yellow', 'blue','red','orange','white'];
let [first, second]= colorArray;
console.log(first,second)

//we could swap values//
let edibles = [' fruits','food'];
let [positionOne, positionTwo]= edibles
positionOne, positionTwo = [ positionTwo, positionOne];
console.log(positionOne,positionTwo);

//How to mutate array in destructuring//

let edibleFood = ['food', 'fruit']
let [fruit, food]= [edibleFood[1], edibleFood[0]];
console.log(fruit, food);

//destructuring object//
let BrandOfCar = {
    make: 'toyota',
    color: 'red',
    tyreColor: 'black',
    yearOfProduction: '2008',
}
let {make,color}=BrandOfCar
console.log(make,color)

// 