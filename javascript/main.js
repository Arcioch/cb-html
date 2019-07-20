// // const pi = 3.14;
// // let name = 'Piotr';
// // console.log(name);
// // //Komentarz jedolinijkow

// // /*
// // Tu mogę pisać co chce
// // asd
// // */
// // let number = 20;

// // number = 23;

// // let bol = true;

// // let myNull = null;

// // let windowWith;

// // console.log(typeof number);


// // let tablica = [1, 'asdadasd', {}];
// // console.log(tablica);

// // console.log(tablica[1]);


// // let surname = 'Arciszewski';
// // surname = 20;


// // console.log("kot" + "kot");
// // console.log(20 + 1);
// // console.log("20" + 1);
// // console.log([1, 2, 3] + "kot");
// // console.log(23 + true);
// // console.log(true + true + true);

// // console.log(parseInt("20") + 1);
// // console.log(parseInt("20px") + 1);
// // console.log(parseInt("px20") + 1);
// // console.log(parseInt(30.2) + 1);

// // console.log(Number("20") + 1);

// // opartory


// // let y = a + 4;
// // console.log(y);
// // console.log(6 % 4);
// let a = 6;
// console.log(a++);
// console.log(a)



// //x += y; //x = 15 x = x + y

// //x -= y;


// let text = 'asdasd';
// text += 'asdasdasdasd';

// //console.log(y === x);

// // console.log(y === 10 && x === 5);
// // console.log(y === 5 || x === 5);

// // console.log(y === 5 ^ x === 10)

// // console.log(!(y === 10 && x === 5));

// // console.log(!true);


// let x = 10;
// let y = 5;

// if (x < 10) {
//     console.log('liczba jest mniejsza od 10');
// } else {
//     console.log('liczba jest wieksza lub równa 10');
// }

// if (x < 10) {
//     console.log('liczba jest mniejsza od 10');
// } else if (x === 10) {
//     console.log('liczba jest równa  10');
// } else {
//     console.log('liczba jest wieksza od 10');
// }

// if (x < 10) {
//     console.log('liczba jest mniejsza od 10');
// } else {
//     if (x === 10) {
//         console.log('liczba jest równa  10');
//     } else {
//         console.log('liczba jest wieksza od 10');
//     }
// }

// //

// let name = 'Anna';

// switch (name) {
//     case 'Bartek':
//         console.log('Wtaij Bartku!');
//         break;
//     case 'Magda':
//         console.log('Wtaj Magda!');
//         break;
//     default:
//         console.log('Witaj nieznajomy')
// }


// /*i e konczący petli;
//       opercaje na liczniku petli) {

//       }

// */

// // for (let i = 0; i < 10; i++) {
// //     if (i % 2 === 0) {
// //         console.log('mój licznik petli to ' + i + 'i jest parzysty')

// //     } else {
// //         console.log('mój licznik petli to ' + i + 'i jest nieparzyste')
// //     }
// // }


// const names = [
//     'Piotr',
//     'Łucja',
//     'Anna',
//     'Aleksandra',
//     'Monika',
//     'Filip',
//     'Jacek',
//     'Grzegorz',
//     'Olivia',
//     'Magda',
//     'Tomasz'
// ];

// const surnames = [
//     'nowak',
//     'wójcik',
//     'kowalczyk',
//     'woźniak',
//     'mazur',
//     'krawczyk',
//     'kaczmarek',
//     'król',
//     'wieczorek',
//     'wróbel',
//     'stępień',
// ];

// // for (let i = 0; i < names.length; i++) {
// //     let name = names[i];
// //     if (name[name.length - 1] === 'a') {
// //         console.log("Hej " + name + 'Jesteś kobietą!')
// //     } else {
// //         console.log("Hej " + name + 'Jesteś męzczyzną!')
// //     }
// // }

// // let gwiazdka = ""

// // for (let i = 0; i < 10; i++) {
// //     for (let j = 0; j < 10; j++) {
// //         gwiazdka += "*";
// //     }
// //     gwiazdka += "\n";
// // }

// // console.log(gwiazdka)


// // let gwiazdka = ""

// // for (let i = 0; i < 10; i++) {
// //     for (let j = 0; j < 10; j++) {
// //         if (i === 0 || i === 9) {
// //             gwiazdka += "*";
// //         } else {
// //             if (j === 0 || j === 9) {
// //                 gwiazdka += "*";

// //             } else {
// //                 gwiazdka += " ";
// //             }

// //         }
// //     }
// //     gwiazdka += "\n"
// // }
// // console.log(gwiazdka)

// // let linijka = "";


// // let end = 10
// // for (let i = 0; i < 11; i++) {
// //     let strTmp = ""
// //     for (let j = 0; j < 11; j++) {
// //         if (j == i && j != end) {
// //             strTmp += "*"
// //         }
// //         if (j == end) {
// //             strTmp += "*"
// //             end = end - 1
// //         }
// //         else {
// //             strTmp += " "
// //         }
// //     }
// //     console.log(strTmp)
// // }


function showText() {
    console.log('To jest tekst w funkcji');
}

showText();
showText();
showText();


function sum(a, b) {
    return a + b;
}

let suma = sum(10, 15);

function superSuma() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

superSuma(1, 23, 54, 76, 87);



function silnia(liczba) {
    if (liczba < 0) {
        console.error('nie istneiej slinia z liczby ujemnej')
    } else if (liczba === 0) {
        return 1;
    } else {
        let silnia = 1;
        for (let i = 1; i <= liczba; i++) {
            silnia = silnia * i;
        }

        return silnia;
    }
}

console.log(silnia(5));