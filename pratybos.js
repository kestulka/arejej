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

const sakinys = "labas rytas gal norite rytines kavutes ar baltos degtines ?";
const zodziai = sakiniuMasyvas.split(" "); // is sakinio sukuria masyva

const lyginioIndeksoZodziai = [];
const nelyginioIndeksoZodziai = [];
