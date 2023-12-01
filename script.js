"use strict";

// const array = ["eat", "sleep", "masturbate"];

// array[0] = "eat";
// array[1] = "sleep";
// array[2] = "masturbate";

// console.log(array);

// const newArray = new Array(20).fill(1).map((el, index) => index + 1);

// const newArray2 = newArray.map((el) => el ** 3);
// console.log(newArray);
// console.log(newArray2);

// const objs = [
//   { name: "Peter", age: 35 },
//   { name: "John", age: 27 },
//   { name: "Jake", age: 28 },
// ];

// objs.reduce((accumulator, currentValue) => {
//   return accumulator, currentValue.age;
// }, 0);

// console.log(objs);

// slice

// const medziai = ["liepa", "berzas", "azuolas", "pusis", "drebule"];

// const medziai2 = medziai.slice(0, 2);

// console.log(medziai);
// console.log(medziai2);
// console.log(medziai.slice(0, 4));

// const nums = [2, 4, 6, 1, -22, -3, -5, 1, 0, -2, 11, 13];
// const newNums = nums.filter(function (el, index) {
//   return el % 2 !== 0;
// });
// console.log(newNums);

const nums = [2, 4, 6, 1, -22, -3, -5, 1, 0, -2, 11, 13];

const numsFind = nums.find((element) => element < -20);
console.log(numsFind);
