// function sayMyName(){
//     console.log("Moiz Ali");
// }

// sayMyName();

// function printCounting() {

//     for (let i = 0; i<=10; i++){
//         console.log(i);
//     }
// }
// printCounting();

// function printNumber(num){
//     console.log("Printing Num: ", num);
// }

// printNumber(10);

// function calculateAvg(num1, num2){
//     let avg = (num1 + num2) / 2;
//     console.log("Average is: ", avg);
// }

// calculateAvg(12, 12);

//return functions

// function getSum(a, b, c){
//     sum = a+b+c;
//     return sum;
// }

// let ans = getSum(1, 2, 3);
// console.log(ans);

// function getMyName(firstName, secondName) {
//     let fullName = firstName + " " + secondName;
//     return fullName;
//     //unreachable statements
//     let a = 1;
//     let b = 2
//     let c = a+b;
//     console.log(c);
// }

// let ans = getMyName("Moiz", "Ali");
// console.log(ans);

// function getMultiplication(a, b){
//     return a*b;
// }
// let ans = getMultiplication(2, 2);
// console.log(ans);

//Another Way
// const getMultiplication = function (a, b){
//     return a*b;
// }
// let ans = getMultiplication(2, 2);
// console.log(ans);

// const squareNumber = function(num) {
//     return num**2;
// }
// let ans = squareNumber(5);
// console.log(ans);

//Arrow Function
let getExp =  (a, b) => {
    return a**b;
}
let ans = getExp(2, 10);
console.log(ans);