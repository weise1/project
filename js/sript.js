"use strict";

let number0films = +prompt("Сколько фильмов вы уже посмотрели?");

console.log(number0films);


// let qes1 = prompt("Один из последних просмотренных фильмов?:"),
//     qes2 = +prompt("На сколько оцените его?:"),
//     qes3 = prompt("Один из последних просмотренных фильмов?:"),
//     qes4 = +prompt("На сколько оцените его?:");




const personalMuvieDB = {

    count: number0films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const qes1 = prompt("Один из последних просмотренных фильмов?:"),
          qes2 = prompt("На сколько оцените его?:");

          personalMuvieDB.movies[qes1] = [qes2];
}

console.log(personalMuvieDB);




