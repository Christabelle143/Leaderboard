// import _ from 'lodash';
import './style.css';
import show from './modules/displayscores.js';

const refresh = document.getElementById('btn');
const form = document.getElementById('form');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qrtxrqr2iVYFeQlSONAg/scores';

form.addEventListener('submit', (e) => {
  // auto submission of the form
  e.preventDefault();
  const user = document.getElementById('user');
  const score = document.getElementById('score');
  // fetch post request
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: user.value,
      score: score.value,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => (data));
  user.value = '';
  score.value = '';
});
async function getScore() {
  const requestURL = url;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const scores = await response.json();
  const { result } = scores;
  document.querySelector('.scores').innerHTML = '';
  result.forEach((score) => {
    show(score.user, score.score);
  });
}
refresh.addEventListener('click', getScore);
