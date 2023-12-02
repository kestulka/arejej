"use strict";

// 61 skaidre

// 1:

// const masyvas = ["elementasA", "ElementasB", "ElementasC", "ElementasD"];

// for (let i = 0; i < masyvas.length; i++) {
//   console.log(masyvas[i]);
// }

// 2:

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

// 3:

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

// 4.

const masyvas = [5, 3, 2, 8, 13, 16, 18, 23, 27, 30];

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

const maziausias = masyvas.reduce((maziausias, value, currentIndex) => {
  if (value < masyvas[maziausias]) {
    return currentIndex;
  }
  return maziausias;
}, 0);

console.log(maziausias);

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

const masyvasPasalintas = [...masyvas];
masyvasPasalintas.splice(maziausias, 4);
console.log(masyvasPasalintas);
