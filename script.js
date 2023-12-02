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

// const nums = [2, 4, 6, 1, -22, -3, -5, 1, 0, -2, 11, 13];

// const numsFind = nums.find((element) => element < -20);
// console.log(numsFind);

// OBJECTS

// let cat = "miauw";
// let dog = "auw";
// let bomzas = "puke";

// let object = {
//   cat,
//   dog,
//   bomzas,
// };

// console.log(object);

// const pet = {
//   name: "big",
//   lastname: "cat",
//   age: "senior",
// };

// const petPrototype = {};

// const pet = Object.create(petPrototype);
// pet.name = "big";
// pet.lastname = "cat";
// pet.age = "junior";

// console.log(pet);

// function pet(name, lastname, age) {
//   this.name = name;
//   this.lastname = lastname;
//   this.age = age;
// }
// const pet2 = new pet("big", "cat", "junior");
// console.log(pet2);

// class Pet {
//   constructor(name, lastname, age) {
//     this.vardas = name;
//     this.pavarde = lastname;
//     this.amzius = age;
//   }
// }

// const gyvunas = new Pet("big", "cat", 3);
// console.log(gyvunas.vardas);
// console.log(gyvunas.pavarde);
// console.log(gyvunas.amzius);
// console.log(gyvunas);

// const hero = {
//   name: "spooderman",
//   "real name": "pider man",
// };

// console.log(hero.name);

// console.log(hero["name"]);
// console.log(hero["real name"]);

// const { name, "real name": realName } = hero;
// console.log(name);
// console.log(realName);

// let person = {
//   female: {
//     name: "booba",
//     lastname: "cutie",
//     Inventions: {
//       first: "boner",
//       second: "sexism",
//       third: "war",
//     },
//   },
//   male: {
//     name: "giga",
//     lastname: "chad",
//     Inventions: {
//       first: "testosterone",
//       second: "gym",
//       third: "wealth",
//     },
//   },
// };

// console.log(person.female);
// console.log(person.male);
// console.log(person);
// console.log(Object.keys(person.female));
// console.log(Object.keys(person));
// console.log(Object.values(person.female));
// console.log(Object.values(person));
// console.log(Object.entries(person.female));
// console.log(Object.entries(person));

// const hero = {
//   name: "spooderman",
//   "real name": "pider man",
//   address: {
//     street: "silainiai",
//     city: "kaunas",
//   },
// };

// const {
//   name,
//   address: { city },
// } = hero;
// console.log(name);
// console.log(city);
