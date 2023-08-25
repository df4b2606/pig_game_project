'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
score0El.textContent = 0;
score1El.textContent = 1;
let currentscore = 0;
let score = [0, 0];
let activePlayer = 0;
let playing = true; //多增加这种变量来监视状态
diceEl.classList.add('hidden');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const switchplayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentscore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating a randon dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display the dice pattern
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //check if not 1,add score
    if (dice != 1) {
      currentscore = currentscore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.add('player--active');
      // document
      //   .querySelector(`.player--${1 - activePlayer}`)
      //   .classList.remove('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.add current score to active player's score
    score[activePlayer] += currentscore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // 2.check if player scores >=100
    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
    // 3.switch to next player
  }
});
btnNew.addEventListener('click', function () {
  score = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentscore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});
const newfeature = function () {
  console.log('ffwechangr!!!');
};
