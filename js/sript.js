/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
let number0films;
function start() {
    number0films = +prompt("Сколько фильмов вы уже посмотрели?");

    while (number0films == '' || number0films == null || isNaN(number0films)) {
        number0films = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}

start();


let personalMuvieDB = {

    count: number0films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function reemmberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
           personalMuvieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

reemmberMyFilms();


function detectPersonalLevel() {

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
}


detectPersonalLevel();

function ShowMyDB(hidden) {

    if (!hidden) {
        console.log(personalMuvieDB);
    }
    
}

ShowMyDB(personalMuvieDB.privat);

function writeYourGenres() {
    for (let i = 2; i <= 4; i++) {
        
        personalMuvieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);

         
    }
}

writeYourGenres();