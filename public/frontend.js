'use strict';

const button = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', () => {
  fetch('http://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(response => div.innerHTML = response.value.joke)
    .catch(error => console.log(error))
});