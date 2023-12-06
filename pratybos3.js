"use strict";

// 1.

function randInt(min, max) {
    return (Math.random()) * (max - min) + min;
  }

let masyvas = [];

for (let i = 0; i<30; i++){
    masyvas.push(Math.floor(randInt(5,26)))
}
console.log('full array: ', masyvas)

// 2.

// a.

const masyvasOver10 = masyvas.filter((num) => num > 10);
console.log('filtered array: ', masyvasOver10)

let skaitliukas = 0;

for(let i=0; i<masyvasOver10.length; i++){
    skaitliukas++
}

console.log('kiek elementu yra kuriu reiksme didesne nei 10: ', skaitliukas)

// b.

const maxNumOfMasyvas = Math.max(...masyvas);
console.log('didziausias masyvo skaicius: ', maxNumOfMasyvas)

const maxNumOfMasyvasIndex = masyvas.indexOf(maxNumOfMasyvas)
console.log('didziausio skaicio indeksas: ', maxNumOfMasyvasIndex)

let skaitliukas2 = 0

for(let i=0; i<masyvas.length; i++){
    if(maxNumOfMasyvas === masyvas[i]){
        skaitliukas2++
    }
}

console.log(`didziausiu skaiciu kiekis: ${skaitliukas2}`)

// c.


// let evenNums = masyvas.filter((num) => num % 2 === 0);

// let naujasMasyvas = evenNums.map((num, index) => index);

// let sum = naujasMasyvas.reduce((sum, index) => sum + index, 0);

// console.log("naujas masyvas:", naujasMasyvas);
// console.log("lyginiu indeksu suma: ", sum);

// arba

// const index = masyvas.reduce((accumulator, currentValue, currentIndex) =>
// currentIndex % 2 == 0 ? accumulator + currentValue : accumulator, 0)

// d.

let naujasMasyvas = masyvas.map((num, index) => num - index)
console.log(naujasMasyvas)

// arba

// const naujasMasyvas = []
// const elMinusIndex = masyvas.forEach((el, index) => naujasMasyvas.push
// (el - index))
// console.log(naujasMasyvas)

// e.

for (let i = 1; i<=10; i++){
    masyvas.push(Math.floor(randInt(5, 26)))
}
console.log(masyvas)

// f.

let evens = masyvas.filter((num, index) => index%2==0)
let odds = masyvas.filter((num, index) => index%2!=0)
console.log(evens)
console.log(odds)

// g.

let didesniUz15 = masyvas.map((num, index) => (index % 2 == 0 && num > 15) ? "nulis" : num)
console.log(didesniUz15)

// h.

const didesnisUz10 = (num) => num > 10;

console.log(masyvas.findIndex(didesnisUz10))
