const movieTitleInput = document.getElementById('title');
const nameInput = document.getElementById('extra-name');
const extraInput = document.getElementById('extra-value');
const addBtn = document.getElementById('add-movie-btn');

// console.log(movieTitleInput, nameInput, extraInput);

let movie = { favMovie: null, dynamicName: 'dynamicValue' };

movieTitleInput.addEventListener('change', (e) => {
    // add the value of movie to to the movie obj
    const favMovieValue = e.target.value;
    movie.favMovie = favMovieValue;
});

let nameProperty = null;
nameInput.addEventListener('change', (e) => {
    // add a property with name of the user input value
    nameProperty = movie[`${e.target.value}`];
});
extraInput.addEventListener('change', (e) => {
    movie[nameProperty] = e.target.value;
});

addBtn.addEventListener('click', () => {
    console.log(movie);
});
