// console.log("JS Lecture: Arrays");

// //creating object
// let obj1 = {
//     name: "Moiz",
//     age: 22,
//     weight: 60,
//     greet: function () {
//         console.log("I'm creating first func in obj");
//     }
// };
// console.log(obj1);
// obj1.greet();

// //Array Creation
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1, typeof arr1);

// //array constructor 
// let arr2 = new Array(1, 2, 3, 4, 5);
// console.log(arr2, typeof arr2);
// console.log(arr2[2]);

//Methods in Array
let arr = new Array("Moiz", 12, true);
console.log(arr);
arr.push("Ali"); //adds element at last
console.log(arr);
arr.pop(); //removes element from last
console.log(arr);
arr.shift(); //removes element from start
console.log(arr);
arr.unshift("Moiz Ali Afzaalar"); //adds element at start
console.log(arr);
arr.push(1, 2, 3);
console.log(arr);
console.log(arr.slice(2, 4)); //gives elements from index 2 to 
console.log(arr);
arr.splice(1, 2, "Hello"); 
console.log(arr);

//arrays map method
let arr3 = [10, 20, 30];
let ansArr3 = arr3.map((number) => {
    return number*number;
})
console.log(ansArr3);

//array filter method
let arr4 = [10, 15, 20, 25, 30];
let ansArr4 = arr4.filter((number) => {
    // if (number%2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return number%2 === 0;
});
console.log(ansArr4);

let arr5 = [1, 2, "Moiz", 3, "Ali", 4, true, 5, false];
let ansArr5 = arr5.filter((value) => {
    return typeof value === "string";
});
console.log(ansArr5);

//array reduce method