/*
// old code

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
    nameProperty = e.target.value;
});
extraInput.addEventListener('change', (e) => {
    value = e.target.value;
});

addBtn.addEventListener('click', () => {
    movie[`${nameProperty}`] = value;
    console.log(movie);
});
*/

const addBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

function objHandler() {
    const movie = {
        id: Math.random(),
        info: {
            favMovie: null,
            extraName: extraValue,
        },
    };

    const movieTitleInput = document.getElementById('title').value;
    const extraNameInput = document.getElementById('extra-name').value;
    const extraValueInput = document.getElementById('extra-value').value;

    console.log(movieTitleInput, extraNameInput);
}

objHandler();
