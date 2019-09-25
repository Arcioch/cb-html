
//kolorowanie i łapanie lementu w js
let span = document.getElementsByTagName('span')[0];
span.style.backgroundColor = "pink";
span.style.fontSize = "29px";
//koloranie i lapanie elementu w jquery
$('p')
    .css('background-color', 'green')
    .css('font-size', '20px');

//typy zmiennych w js
let num = 22;
let floatNumber = 22.3;
let bol = true;
let nullVar = null;

const text = 'Liczba pi';
//bład nie mozna nadpisac consta text = 'asdsadasd pi';

//aby sprawdzic typ zmiennej slowo typeof
console.log(typeof text);

//tablce

let tablica = [];
//do tablicy mozemy dodac element
tablica.push(5);
console.log(tablica);
//pierwszy element taica
console.log(tablica[0]);
tablica.push(['asd', 'kot', 8])

//console.log(tablica.pop());
//console.log(tablica);

//wstawia na poczatek tablicay
tablica.unshift('kot')
console.log(tablica);

let person = ['Piotr', 'Arciszewski'];
let newPerson = person[0] + ' ' + person[1];
console.log(newPerson);

//join
let newPersonJoin = person.join(' ');
console.log(newPersonJoin);

//przyklad

let tags = ["BMW", "Audi", "Toyota"];
let tagsString = "";

for (let i = 0; i < tags.length; i++) {
    if (tags.length - 1 === i) {
        tagsString += tags[i];
    } else {
        tagsString += tags[i] + ', ';
    }
}

console.log(tagsString);
console.log(tags.join(', '))

//wyciaganie fragmentu tablicy
let names = ["ala", 'alan', 'jozek', 'zbyszek', 'franek'];
let tab2 = names.slice(-2);
console.log(tab2);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//map za pomoca zwyklej funckj i strzalkowej
names.map(function (item, key) {
    console.log(item)
})
// to samo za pomoca funckji stzralkowej
names.map((item, key) => {
    console.info(item)
})


let numerss = [21, 2333, 1233, 1234, 35];
let doubleNumerbs = [];

for (let i = 0; i < numerss.length; i++) {
    if (i % 2 == 1) {
        doubleNumerbs.push(numerss[i] * 2);
    }
}
console.log(doubleNumerbs);
//js if
// if(waruenk){
//     co jesli warunek prawdziwy
// }
//
//let doubleNumerbs = numerss.map(numer => numer * 2);

let napis = "CHCEJUŻDODOMU";
for (let i = 0; i < napis.length; i++) {
    if (i % 3 == 2) {
        console.log(napis[i])
    }
}

// napis.split('').map(function (item, key) {
//     if (key % 3 == 2) {
//         console.log(item)
//     }
// })