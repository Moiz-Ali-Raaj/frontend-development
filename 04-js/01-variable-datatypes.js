console.log("01 JavaScript")

//bigint
// let a = 677374664647827828844676n;
// console.log(a)

//null 
// let weather = null;
// console.log(weather)

//Null vs. Undefined
// let weather = current_weather("Islamabad")
//possible answers
//1. 25 degree
//2. null
//3. undefined

//symbol
// const id1 = Symbol("id")
// const id2 = Symbol("id")
// console.log(id1 == id2)

//Non-primitive DataTypes
//Array
// let arr = [10, 20, 30, "moiz", true]
// console.log(arr)

// //object (for example; moiz 2002 ai engineer ml 01)
// let obj = {
//     name: "moiz",
//     dob: 2002,
//     degree: "AI and ML Engineer"
// }
// console.log(typeof (obj))

//function
// let c = function add(){
//     console.log("hello");
// }
//console.log(c)
// c();

//Primitive DataType is immutuable (cannot be changed)
// let a = 10;
// a = 20;
// console.log(a)
//proof that primitive is immutuable
// let b = "moiz";
// b[0] = "a";
// console.log(b)

//Non-primitive is mutuable
// let arr = [10, 20, 30, 40]
// arr[0] = 50;
// console.log(arr)

// let obj = {
//     name: "moiz",
//     age: 2002
// }
// obj.name = "ali";
// console.log(obj)

//famous Question (Copy By Value in primitive)
let a = 10;
let b = a;

b = 20;
console.log(a, b)

//famos Puzzle (Reference by Value in Non-Prmitive)
let obj1 = {
    name: "moiz",
    age: 2002,
}

obj2 = obj1;
obj2.name = "ali";
console.log(obj1)