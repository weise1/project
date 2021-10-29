"use strict";

let number0films = +prompt("Сколько фильмов вы уже посмотрели?");

console.log(number0films);
//     qes3 = prompt("Один из последних просмотренных фильмов?:"),
//     qes4 = +prompt("На сколько оцените его?:");


// for (let i = 1; i <= 2; i++) {
//     let qes1 = prompt("Один из последних просмотренных фильмов?:"),
//         qes2 = +prompt("На сколько оцените его?:");

//     personalMuvieDB.movies[qes1] = qes2;
    
// }

// console.log(personalMuvieDB);


// for (let i = 0; i < 2; i++) {
//     const qes1 = prompt("Один из последних просмотренных фильмов?:"),
//           qes2 = prompt("На сколько оцените его?:");

//           personalMuvieDB.movies[qes1] = [qes2];
// }

// console.log(personalMuvieDB);
const personalMuvieDB = {

    count: number0films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let index = 0; index < 11; index++) {
    let ques = prompt("Введите название фильма(не менее 10 символов): "),
        qes2 = prompt("На сколько оцените его?:");

    if (ques != null && ques != '' && ques != ' ' && ques.length < 10) {
        personalMuvieDB.movies[ques] = qes2;
        console.log("Все круто");
        if (index == 5) {
            break;
        }
        
    }
    else if (ques.length >= 10) {
        console.log("Ошибка");
        if (index == 10) {
            console.log("У вас только 10 попыток!");
        }
    }
    else {
        console.log("Ошибка пиздец");
    }
}

console.log(personalMuvieDB);


if (personalMuvieDB.count < 10) {
    console.log("Мало фильмов просмотрено");
}
else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
    console.log("Достаточно фильмов");
}
else if (personalMuvieDB.count > 30) {
    console.log("Вы киноман");
}
else {
    console.log("Произошла ошибка");
}




