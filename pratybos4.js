// let duomenys = {
//     id: "0001",
//     type: "donut",
//     name: "Cake",
//     ppu: 0.55,
//     topping: [
//         {id: "5001", type: "None"},
//         {id: "5002", type: "Glazed"},
//         {id: "5005", type: "Sugar"},
//         {id: "5007", type: "Powdered Sugar"},
//         {id: "5006", type: "Chocolate with Sprinkles"},
//         {id: "5003", type: "Chocolate"},
//         {id: "5004", type: "Maple"},
//     ]
// }

// console.log(duomenys.topping)
// console.log(duomenys.topping.forEach((element) => console.log(`id: ${element.id} , type: ${element.type}`) ))
// console.log(duomenys.topping.forEach((element) => {Object.entries(duomenys).forEach([key, value]) => console.log(key, value)}))

// const cartel = {
//     grandparents: {
//         grandma: "Marge",
//         grandpa: "Homer",
//     },
//     parents: {
//         mom: "Lisa",
//         dad:"Millhouse",
//     },
//     children: {
//         daughter: "Anne",
//         son1: "Peter",
//         son2: "Bob",
//     },
// }

// for (let category in cartel){
//     const members = Object.values(cartel[category]).join(' ');
//     console.log(`${category}: ${members}`);
// }

let knygos = [
    {
      isbn: 9786098233346,
      price: 7.99,
      year: 2006,
      title: "Bloga dukte",
      pagecount: 250,
    },
    {
      isbn: 9786098233391,
      price: 7.99,
      year: 2015,
      title: "Mergina kuria jis pazinojo",
      pagecount: 315,
    },
    {
      isbn: 9786099609324,
      price: 7.99,
      year: 2019,
      title: "Tapk ragana",
      pagecount: 150,
    },
    {
      isbn: 9786094792250,
      price: 6.99,
      year: 2007,
      title: "Sfera",
      pagecount: 450,
    },
    {
      isbn: 9786094792335,
      price: 9.99,
      year: 2019,
      title: "Mes susitinkame cia",
      pagecount: 500,
    },
    {
      isbn: 9786094273780,
      price: 7.99,
      year: 2019,
      title: "Sunaikinimas",
      pagecount: 509,
    },
    {
      isbn: 9786098233483,
      price: 12.99,
      year: 2018,
      title: "Artemide",
      pagecount: 199,
    },
    {
      isbn: 9786094273872,
      price: 4.99,
      year: 2015,
      title: "Fondas ir imperija",
      pagecount: 185,
    },
    {
      isbn: 9786094273902,
      price: 7.99,
      year: 2019,
      title: "Amzinybes fjordo pranasai",
      pagecount: 333,
    },
    {
      isbn: 9786094442742,
      price: 5.99,
      year: 2004,
      title: "Bejegiai",
      pagecount: 777,
    },
    {
      isbn: 9786094442940,
      price: 14.99,
      year: 2019,
      title: "Klajunai",
      pagecount: 172,
    },
    {
      isbn: 9786090404386,
      price: 7.99,
      year: 2015,
      title: "Mergina, kuri pakliuvo i voratinkli",
      pagecount: 356,
    },
  ];
  
let masyvas = []
for (let i in knygos){
    if (knygos[i].year > 2015){
        masyvas.push(knygos[i].title)
    }
    for(let a in knygos[i]){
        console.log(`${a} --> ${knygos[i][a]}`)
    }
}
console.log(masyvas)

// 6 uzd













// function skaičiuotiArbatpinigius(saskaita) {

//    let palikamaSuma;

//    if (saskaita < 50) {

//        palikamaSuma = 0.2 * saskaita;

//    } else if (saskaita >= 50 && saskaita < 200) {

//        palikamaSuma = 0.15 * saskaita;

//    } else {

//        palikamaSuma = 0.1 * saskaita;

//    }

//    const galutineSuma = saskaita - palikamaSuma;

//    return [palikamaSuma, galutineSuma];

// }


// const seima1 = skaičiuotiArbatpinigius(45);

// const seima2 = skaičiuotiArbatpinigius(120);

// const seima3 = skaičiuotiArbatpinigius(250);


// const rezultatai = [seima1, seima2, seima3];


// console.log(rezultatai)

