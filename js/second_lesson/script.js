const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const favoriteFilm1 =  prompt('Последний фильм?', '');
const filmMark1 = prompt('Оценка фильма', '');
const favoriteFilm2 =  prompt('Последний фильм?', '');
const filmMark2 = prompt('Оценка фильма', '');

personalMovieDB.movies[favoriteFilm1] = filmMark1;
personalMovieDB.movies[favoriteFilm2] = filmMark2;

console.log(numberOfFilms);
console.log(personalMovieDB)

