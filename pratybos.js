"use strict";

// 61 skaidre

// 1uzd:

// const masyvas = ["elementasA", "ElementasB", "ElementasC", "ElementasD"];

// for (let i = 0; i < masyvas.length; i++) {
//   console.log(masyvas[i]);
// }

// 2uzd:

// paprastas budas:

// const masyvas = [2, 3, 5, 8, 13, 16, 18, 23, 27, 30];
// let suma = 0;

// for (let i = 0; i < masyvas.length; i += 1) {
//   suma += masyvas[i];
// }
// console.log(suma);

// forEach budas:

// const masyvas = [2, 3, 5, 8, 13, 16, 18, 23, 27, 30];
// let sumaForEach = 0;

// spausdina masyvo elementus:

// masyvas.forEach((num) => {
//   console.log(num);
// });

// sudeda masyvo elementu suma:

// masyvas.forEach((element) => {
//   sumaForEach += element;
// });
// console.log("masyvo elementu suma: ", sumaForEach);

// reduce budas:

// const masyvas = [2, 3, 5, 8, 13, 16, 18, 23, 27, 30];
// const initialValue = 0;
// const sumWithInitial = masyvas.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
// console.log("masyvo elementu suma: ", sumWithInitial);

// 3uzd:

// const sakinys = "labas rytas gal norite rytines kavutes ar baltos degtines ?";
// const masyvas = sakinys.split(" "); // is sakinio sukuria masyva

// const lyginiaiZodziai = masyvas.filter((word, index) => index % 2 !== 0);
// const nelyginiaiZodziai = masyvas.filter((word, index) => index % 2 === 0);

// const lyginiuZodziuSakinys = lyginiaiZodziai.join(" ");
// const nelyginiuZodziuSakinys = nelyginiaiZodziai.join(" ");

// console.log(masyvas);
// console.log(lyginiaiZodziai);
// console.log(nelyginiaiZodziai);
// console.log(lyginiuZodziuSakinys);
// console.log(nelyginiuZodziuSakinys);

// 4uzd:

// const masyvas = [5, 3, 2, 8, 13, 16, 18, 23, 27, 30];

// rasti maziausia metodas #1:

// let maziausias = 0;
// let minValue = masyvas[0];

// for (let i = 1; i < masyvas.length; i++) {
//   if (masyvas[i] < minValue) {
//     minValue = masyvas[i];
//     maziausias = i;
//   }
// }
// console.log(maziausias);

// rasti maziausia metodas #2:

// const maziausias = masyvas.reduce((maziausias, value, currentIndex) => {
//   if (value < masyvas[maziausias]) {
//     return currentIndex;
//   }
//   return maziausias;
// }, 0);

// console.log(maziausias);

// pasalinti 3 nuo maziausias metodas #1:

// const masyvasPasalintas = masyvas
//   .slice(0, maziausias)
//   .concat(masyvas.slice(maziausias + 4));

// const pasalintiElementai = masyvas.slice(maziausias, maziausias + 4);

// console.log(masyvasPasalintas);
// console.log(pasalintiElementai);

// pasalinti 3 nuo maziausias metodas #2:

// const masyvasPasalintas = masyvas.filter(
//   (_, index) => index < maziausias || index >= maziausias + 4,
// );

// be arrow:

// const masyvasPasalintas = masyvas.filter(function (_, index) {
//   return index < maziausias || index >= maziausias + 4;
// });

// console.log(masyvasPasalintas);

// pasalinti 3 nuo maziausias metodas #3:

// if (maziausias >= 0 && maziausias + 2 < masyvas.length) {
//   const masyvasPasalintas = [...masyvas]; // sukuriamas naujas masyvas su kito masyvo duomenimis
//   masyvasPasalintas.splice(maziausias, 4);
//   console.log(masyvasPasalintas);
// } else {
//   console.log("miau");
// }

// arba

// const masyvasPasalintas = [...masyvas];
// masyvasPasalintas.splice(maziausias, 4);
// console.log(masyvasPasalintas);

// 62 skaidre

// 1uzd:

// const carBrands = [
//   "Toyota",
//   "Honda",
//   "Ford",
//   "Chevrolet",
//   "BMW",
//   "Mercedes-Benz",
//   "Audi",
//   "Volkswagen",
//   "Tesla",
//   "Nissan",
// ];

// carBrands.forEach((brand) => {
//   console.log(brand);
// });

// if (carBrands.includes("Bentley")) {
//   console.log("bentley marke yra jusu masyve");
// } else {
//   console.log("bentley nera jusu masyve");
// }

// console.log("");

// carBrands.push("Bentley");
// carBrands.forEach((brand) => {
//   console.log(brand);
// });

// const findBrand = carBrands.find((element) => element === "Bentley");
// if (findBrand) {
//   console.log("bentley yra masyve");
// } else {
//   console.log("bentley nera masyve");
// }

// 2uzd:

// const groceries = [
//   "Apples",
//   "Bananas",
//   "Milk",
//   "Bread",
//   "Eggs",
//   "Cheese",
//   "Tomatoes",
//   "Chicken",
//   "Rice",
//   "Pasta",
//   "Apples",
//   "Spinach",
//   "Bread",
//   "Milk",
//   "Yogurt",
// ];

// console.log(groceries);

// const uniqueGroceries = [];

// groceries.forEach((item) => {
//   if (uniqueGroceries.indexOf(item) === -1) {
//     uniqueGroceries.push(item);
//   }
// });

// console.log(uniqueGroceries);

// set automatiskai removina duplicate values

// const uniqueGroceries = [...new Set(groceries)];
// uniqueGroceries.forEach((item) => {
//   console.log(item);
// });

// filter + indexof

// const uniqueGroceries = groceries.filter((item, index, array) => 
//   array.indexOf(item) === index
// );
// console.log("unikalus produktai: ");
// uniqueGroceries.forEach((item) => {
//   console.log(item);
// });

// 3uzd:

// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Grapes",
//   "Kiwi",
//   "Pineapple",
//   "Mango",
//   "Strawberry",
//   "Watermelon",
//   "Apple",
//   "Blueberry",
//   "Peach",
//   "Kiwi",
//   "Grapes",
//   "Cherry",
// ];

// console.log("visi vaisiai: ");
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// console.log("-------------------------------------");

// const uniqueFruits = [];

// fruits.forEach((fruit) => {
//   if (!uniqueFruits.includes(fruit)) {
//     uniqueFruits.push(fruit);
//   }
// });

// console.log("unikalus vaisiai:");
// uniqueFruits.forEach((fruit) => {
//   console.log(fruit);
// });

// 4uzd:

// const masyvas = [11, 13, 21, 23, 1, 3, 6, 9, 5, 2, 25, 27, 30];

// function GenerateRandomName() {
//   const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"];
//   const randomIndex = Math.floor(Math.random() * names.length); // is saraso paima random skaiciu ir pagal ji atitinkanti varda
//   return names[randomIndex]; // grazina varda pagal indeksa
// }

// function replaceEvenNumsWithNames(array) {
//   for (let i = 0; i < array.length; i++) {
//     // suka cikla kol baigiasi array elementai
//     if (array[i] % 2 === 0) {
//       // jei paduoto array'iaus indeksinis elementas yra lyginis tai sugeneruoja varda pagal praeita funkcija
//       array[i] = GenerateRandomName();
//     }
//   }
//   return array;
// }

// const pakeistasMasyvas = replaceEvenNumsWithNames(masyvas); // dvi funkcijas pritaikome savo paprastam array'iui ir priskiriam ji i nauja modifikuota

// const pakeistasMasyvasDidziosiomis = masyvas.map((element) => {
//   return typeof element === "string" ? element.toUpperCase() : element; // patikrinam ar array'iaus elementas yra string, jei taip, grazina elementa didziosiomis, jei ne, grazina toki koks buvo
// });

// console.log(pakeistasMasyvas.join(" "));
// console.log(pakeistasMasyvasDidziosiomis.join(", ")); // paima visus array'iaus elementus ir padaro i stringa, paima argumenta kabutese(siuo atveju tarpa)

