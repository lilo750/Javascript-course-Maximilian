const movieTitleInput = document.getElementById('title');
const nameInput = document.getElementById('extra-name');
const extraInput = document.getElementById('extra-value');
const addBtn = document.getElementById('add-movie-btn');

// console.log(movieTitleInput, nameInput, extraInput);

let movie = {};

movieTitleInput.addEventListener('change', (e) => {
    // add the value of movie to to the movie obj
    movie.favMovie = e.target.value;
});

let nameProperty = null;
let value = null;

nameInput.addEventListener('change', (e) => {
    // add a property with name of the user input value
    // nameProperty = movie[`${e.target.value}`];
    nameProperty = e.target.value;
});
extraInput.addEventListener('change', (e) => {
    // movie[nameProperty] = e.target.value;
    value = e.target.value;
});

// movie[`${nameProperty}`] = value;
movie.ok = 'ok bro';

addBtn.addEventListener('click', () => {
    console.log(movie);
});
