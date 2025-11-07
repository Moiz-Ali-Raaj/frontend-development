//Operators

//1. Arithmetic Operators
// console.log("Arithemtic Operatos")
// console.log(5+3);
// console.log(5-3);
// console.log(5*3);
// console.log(5/3);
// console.log(5%3);
// console.log(5**3);


//2. Assignment Operators
// let x = 3;
// let y = 4;
// let z = x*y;
// console.log(z)

//3. Comparison Operators (>, <, >=, <=)
// let a = 20;
// let b = "20";
// console.log(a>b);
// console.log(a>=b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a===b); //Strict Checking (first it checks type then comparison)
//example
// let x = "10";
// let y = Number(x);
// console.log(typeof (a), a)

//NaN 
// let a = "100moiz";
// let b = Number(a);
// console.log(typeof b, b);

//Number to String
// let x = 10;
// let y = String(x);
// console.log(typeof(y), y);

//Bool to Number
// let a = true;
// console.log(Number(a));

//Null to Number
// let b = null;
// console.log(Number(b));

//Undefined to Number gives NaN

//Computer Science Challenge
// let a = 0.1;
// let b = 0.2;

// let c = a+b;
// console.log(typeof c, c==0.3, c);

//One of the way to proof 0.1 + 0.2 == 0.3
// let a1 = "0.1"
// Number(a1);
// let b1 = "0.2"
// Number(b1);
// console.log(typeofc1, c1==0.3, c1)

// let x = 0.5;
// let y = 0.7;
// let z = x+y;
// console.log(typeof z, z==1.2, z)

//Rules
//1. Null is loosely equal to undefined
// console.log(null==undefined)
// console.log(null===undefined)
// console.log(null==0)
// console.log(null=="")
// console.log(null==true)
//2. >,<,>=,<= (Using this type conversion is possible or be converted)
// console.log(null>=0);
// console.log(null<=0);
// console.log(null>0);
// console.log(null<0);

// console.log(null>=undefined);
// console.log(null<=undefined);

// console.log("Moiz" > "Ali") //It compare value by value, like M -> A, 

// console.log(10>="10");
// console.log(10>=true);
// console.log(10>="");

// console.log(NaN==NaN);
// console.log(NaN===NaN);

//Loops
//1. For Loop
// for (i=0; i<10; i++){
//     console.log(i);
// }

//2. While Loop
// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

//3. do While
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

//Conditionals
// let age = 18;

// if (age>=18){
//     console.log("Eligible to Vote. You can Vote!!!");
// }
// else{
//     console.log("Not Eligible Vote");
// }

// let age = 118;
// if (age>=40){
//     console.log("You are old!!!");
// }
// else if(age<18){
//     console.log("You are Kid!!!");
// }
// else{
//     console.log("You are Young")
// }

//Logical Operators (&, ||)
//Logical & 
// //-> If first value is false, it will return the first value itself
//-> If first value is true it will return second value.
// console.log(false&&false);
// console.log(false&&true);
// console.log(true&&false);
// console.log(true&&true);

// //Simple QnA
// let a = "Moiz";
// let b = "Ali";
// let c = a&&b;
// console.log(c);

//Logical || 
// //-> If first value is true, it will return the first value itself
//-> If first value is false, it will return second value.

// console.log(false||false);
// console.log(false||true);
// console.log(true||false);
// console.log(true||true);

// let a = 0;
// let b = 20;
// console.log(a&&b);

// let a = 10;
// let b = 20;
// console.log(a||b);

//!= 
// console.log(1!=5);

