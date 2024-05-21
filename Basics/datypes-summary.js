// how data is stored in memomry and how it can be accessec is the condition of classification of datatypes

// PRIMITIVE DATATYPE 
// these are call by value datatypes. i.e copy bnti h
// 7 categories : String ,Number ,Boolean,Null,Undefined,Symbol,BigInt


// REFERENNCE TYPE OR NONO PRIMITIVE 
// These are : Arrays , Objects , functions

const heros = ["ironman" , "shaktiman"];
let myobj = {
    name: "harsh",
    age:21, 
}

const myFunction = function(){
    console.log("hi!!!");
}

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime 
// and can change throughout the program as we assign different values to them.

// find null vs undefined..



// memory..
// Stack(Primitives) and heap (non-primitives.)
// stack k ander copy milta hai jbki heap s original ka refernece milta hai..

let ytname = "harsh"
let anothername = ytname
anothername = "rohan"
console.log(anothername)
console.log(ytname)

//heap
let userone = {
    email : "harsh@gmail",
    age:24
}
let usertwo = userone
usertwo.age = 99
console.log(userone.age)
console.log(usertwo.age)
// dono change ho gye kyuki heap me store hote hai object so original refernce milega n ki copied..