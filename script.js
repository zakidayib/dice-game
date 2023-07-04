//write code here

//write code here

"use strict";

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;
//roll
document.querySelector(".btn--roll").addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    document.querySelector(".dice").src = `dice-${dice}.png`;

    if (dice === 1) {
      //switch player
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).innerText = 0;

      if (activePlayer === 0) {
        activePlayer = 1;
      } else {
        activePlayer = 0;
      }

      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");
    } else {
      // add to current
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).innerText =
        currentScore;
    }
  }
});

//hold
document.querySelector(".btn--hold").addEventListener("click", function () {
  // add current score to score
  // if player has > 100
  // winner
  // switch
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.querySelector(`#score--${activePlayer}`).innerText =
      scores[activePlayer];
    document.querySelector(`#current--${activePlayer}`).innerText = 0;

    if (scores[activePlayer] >= 10) {
      playing = false;
      document.querySelector(`#name--${activePlayer}`).innerText = "WINNER!!";
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      currentScore = 0;
      if (activePlayer === 0) {
        activePlayer = 1;
      } else {
        activePlayer = 0;
      }

      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");
    }
  }
});

//new
document.querySelector(".btn--new").addEventListener("click", function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  //romve black background
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");

  // make scores 0
  document.querySelector(`#score--0`).innerText = scores[0];
  document.querySelector(`#score--1`).innerText = scores[1];
  // change winner to player 1 or player 2
  document.querySelector(`#name--0`).innerText = "Player 1";
  document.querySelector(`#name--1`).innerText = "Player 2";

  //remove white background from player 1
  document.querySelector(".player--1").classList.remove("player--active");

  // add white background to player 0
  document.querySelector(".player--0").classList.add("player--active");

  // make current score 0;
  document.querySelector(`#current--0`).innerText = 0;
  document.querySelector(`#current--1`).innerText = 0;
});
