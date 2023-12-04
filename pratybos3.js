"use strict";

// 1.

// function randInt(min, max) {
//     return (Math.random()) * (max - min) + min;
//   }

// let masyvas = [];

// for (let i = 0; i<30; i++){
//     masyvas.push(Math.floor(randInt(5,26)))
// }
// console.log('full array: ', masyvas)

// 2.

// a.

// const masyvasOver10 = masyvas.filter((num) => num > 10);
// console.log('filtered array: ', masyvasOver10)

// let skaitliukas = 0;

// for(let i=0; i<masyvasOver10.length; i++){
//     skaitliukas++
// }

// console.log('kiek elementu yra kuriu reiksme didesne nei 10: ', skaitliukas)

// b.

// const maxNumOfMasyvas = Math.max(...masyvas);
// console.log('didziausias masyvo skaicius: ', maxNumOfMasyvas)

// const maxNumOfMasyvasIndex = masyvas.indexOf(maxNumOfMasyvas)
// console.log('didziausio skaicio indeksas: ', maxNumOfMasyvasIndex)

// let skaitliukas2 = 0

// for(let i=0; i<masyvas.length; i++){
//     if(maxNumOfMasyvas === masyvas[i]){
//         skaitliukas2++
//     }
//     }
// console.log('kiek kartu kartojasi didziausias skaicius: ', skaitliukas2)
