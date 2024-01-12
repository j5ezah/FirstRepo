//Classes are a template for creating objects. 
// They encapsulate data with code to work on that data. 
// Classes in JS are built on prototypes but also have some 
// syntax and semantics that are unique to classes.**//

//Classes are in fact "special functions", and just as you can define function expressions
//  and function declarations, a class can be defined in two ways: 
//  a class expression or a class declaration.//

//declaration
class rectangle {
    constructor(heigth,width){
        this.heigth = heigth;
        this.width = width;
    }
}

//class is anonymous but assigned to a variable
  measurement = class{
    constructor(height, width){
        this.height = height;
        this.width = width;
}
  };
// expression class has it name
  measurement = class measurement2 {
    constructor(height,width){
        this.height = height;
        this.with = width;

    }
  };
//methods
//methods can be plain functions,asyn function,generator function and asyn generator functions.
//js
class rectangle{
    constructor(heigth, width){
        this.heigth=heigth;
        this,width=width;
    }
}
//getter

let dog = {
    color:"white",
    limbs:4,
    breed:"labrador",
    bark: ()=> console.log(`${this.breed} is barking`)
}


let mannerStreet =['isaich', 'joseph']
conatructor[isaiah,joseph]
this.isaiah=isaiah
this.joseph=joseph