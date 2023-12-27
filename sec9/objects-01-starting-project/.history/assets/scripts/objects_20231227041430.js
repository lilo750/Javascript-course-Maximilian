const movieTitleInput = document.getElementById('title');
const nameInput = document.getElementById('extra-name');
const extraInput = document.getElementById('extra-value');

// console.log(movieTitleInput, nameInput, extraInput);

const movie = {};

movieTitleInput.addEventListener('change', (e) => {
    console.log(e.target.value);
});
