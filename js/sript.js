"use strict";

let number0films = +prompt("Сколько фильмов вы уже посмотрели?");

console.log(number0films);

// let qes1 = prompt("Один из последних просмотренных фильмов?:"),
//     qes2 = +prompt("На сколько оцените его?:"),
//     qes3 = prompt("Один из последних просмотренных фильмов?:"),
//     qes4 = +prompt("На сколько оцените его?:");


// const personalMuvieDB = {

//     count: number0films,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const qes1 = prompt("Один из последних просмотренных фильмов?:"),
//           qes2 = prompt("На сколько оцените его?:");

//           personalMuvieDB.movies[qes1] = [qes2];
// }

// console.log(personalMuvieDB);




for (let i = 0; i <= 10; i++) {
    const ques1 = prompt("Какой ваш фильм(больше 50 символов нельзя):");
    if (ques1 == 0) {
        break;
    }
    else if (ques1.length <= 10) {
        console.log("ЗАебись");
    }
    else {
        if (i == 10) {
            console.log("У вас есть только 10 попыток");
        }
    }
}









