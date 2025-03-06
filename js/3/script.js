'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms == '') {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const favoriteFilm1 = prompt('Последний фильм?', '');
        const filmMark1 = prompt('Оценка фильма', '');

        if (favoriteFilm1 != null && filmMark1 != null && favoriteFilm1 != '' && filmMark1 != '' && favoriteFilm1.length < 50 && filmMark1.length < 50) {
            personalMovieDB.movies[favoriteFilm1] = filmMark1;
        } else {
            i--;
        }
    }
}

rememberMyFilms();


function personalDB() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 || personalMovieDB < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман")
    } else {
        console.log('Error')
    }
}


console.log(numberOfFilms);
console.log(personalMovieDB)

