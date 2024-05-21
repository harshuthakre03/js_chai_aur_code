console.log(null > 0)    // false
console.log(null == 0)   //false
console.log(null >= 0)   //true
// here we need to note that equality check == works differently than comparision operator(> or <)
//comparision convert null to a  number 0  
console.log(undefined > 0)  //false
console.log(undefined >= 0)  // false
console.log(undefined == 0)  //false
/*
is tarah k comparision confuse krte hai so avoid as much as poissible..
*/ 
console.log("2" ===2)  //false
// triple equals does strict checking so it also checks the datatypes which are compared are same or not then it compares
// here one is striing and other is number so false




