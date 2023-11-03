/* eslint-disable linebreak-style */
/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
/* jslint for:true */
const gridContainer = document.querySelector('.grid-container');
let cards = [];
let firstCard;
let secondCard;
let lockBoard = false;
let score = 0; 
let pairs = 0;
const feedback = 'Select two cards to find out.';
let i = 0;

// Alex's Code
document.querySelector('.pairs').textContent = pairs;
document.querySelector('.feedback').textContent = feedback;
document.querySelector('.score').textContent = score;

// Code from tutorial with ESLinting issues fixed by Alex
fetch('./data/cards.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      cards = [...data, ...data];
      shuffleCards();
      generateCards();
    });

// Code from tutorial
function shuffleCards() {
  let currentIndex = cards.length;
  let randomIndex;
  let temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

// Code from tutorial with ESLinting issues fixed by Alex
function generateCards() {
  for (i; i < cards.length; i += 1) {
    const card = cards[i];
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-name', card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src="${card.image}" />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener('click', flipCard);
  }
}

// Code from tutorial with ESLinting issues fixed by Alex
function flipCard() {
  if (lockBoard) {
    return;
  }
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  document.querySelector('.score').textContent = score;
  lockBoard = true;

  checkForMatch();
}

// Code from tutorial
function checkForMatch() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

// Code from tutorial with functionality added by Alex (pairs & feedback, youWin())
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  pairs++;
  document.querySelector('.pairs').textContent = pairs;
  resetBoard();
  document.querySelector('.feedback').textContent = 'Yes';

  if (pairs === 6) {
    youWin();
  }
}

// Code from tutorial
function unflipCards() {
  setTimeout(function() {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}

// Code from tutorial with functionality added by Alex (feedback)
function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  document.querySelector('.feedback').textContent = 'No';
}

// Alex's code
function youWin() {
  document.querySelector('.final-score').textContent = score;
  document.querySelector('.you-win').style.display = 'block';
  document.querySelector('.in-progress').style.display = 'none';
}
