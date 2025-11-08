//Number
// let a = 10;
// let b = 345.627882;
// let c = b.toFixed(3);
// console.log(c) //If we want it selects only two digits after decimal
//tofixed return strings, and it cannot be changed means b value is not change
//b/c of prmitive datatype
// console.log(b)

//When we want to select precision, and it also returns string
// console.log(b.toPrecision(4));

//Another way to create Number. By using num keyword, it creates number with a type object
// let a = new Number(20);
// console.log(typeof a);

//Math
// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.ceil(6.3));
// console.log(Math.floor(6.3));
// console.log(Math.log10(20));
// console.log(Math.random()); //Range 0 to 1, 0 is included while 1 is excluded

//Example to use Random func
console.log(Math.random()); //0 to 1, 1 is excluded
console.log(Math.random()*10); //0.11.. to 0.9999
console.log(Math.floor(Math.random()*10)); //0 to 9
console.log(Math.floor(Math.random()*10)+1); //1 to 10
console.log(Math.random()*6); //

//OTP Generator
console.log(Math.floor(Math.random()*(9999-1000+1)+1000));

//Create a function which generates random number b/w 0-0.9999
