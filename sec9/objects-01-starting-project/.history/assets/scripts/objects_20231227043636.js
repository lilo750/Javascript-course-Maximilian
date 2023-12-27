const movieTitleInput = document.getElementById('title');
const nameInput = document.getElementById('extra-name');
const extraInput = document.getElementById('extra-value');
const addBtn = document.getElementById('add-movie-btn');

let movie = { favMovie: null, dynamicName: 'dynamicValue' };

// Move the event listeners outside the 'click' event listener
movieTitleInput.addEventListener('change', (e) => {
    const favMovieValue = e.target.value;
    movie.favMovie = favMovieValue;
});

let nameProperty = movie.dynamicName;

nameInput.addEventListener('change', (e) => {
    nameProperty = movie[`${e.target.value}`];
});

extraInput.addEventListener('change', (e) => {
    movie[nameProperty] = e.target.value;
});

addBtn.addEventListener('click', () => {
    console.log(movie);
    // Add any additional logic you want to perform when the button is clicked
});
