import Spades from './Spades';
import Clubs from './Clubs';
import Diamonds from './Diamonds';
import Hearts from './Hearts';

const spadesArr = [];
const clubsArr = [];
const diamondsArr = [];
const heartsArr = [];
let pack = [];
const names = ['ace', 'jack', 'queen', 'king', 'six', 'seven', 'eight', 'nine', 'ten'];
for (let n = 0; n < names.length; n++) {
  spadesArr.push(new Spades(names[n]));
  clubsArr.push(new Clubs(names[n]));
  diamondsArr.push(new Diamonds(names[n]));
  heartsArr.push(new Hearts(names[n]));
}
pack = pack.concat(spadesArr, clubsArr, diamondsArr, heartsArr);

const desk = document.querySelector('.desk');
let counter = 0;
const counterContainer = document.querySelector('.result__points');
counterContainer.innerHTML = counter;

function takeOne() {
  const newCard = pack.splice(Math.floor(Math.random() * pack.length), 1);

  let icon;
  let suitClass;
  if (newCard[0].suit === 'spades') {
    icon = '&#9824;';
    suitClass = 'card__suit_black';
  } else if (newCard[0].suit === 'clubs') {
    icon = '&#9827;';
    suitClass = 'card__suit_black';
  } else if (newCard[0].suit === 'diamonds') {
    icon = '&diams;';
    suitClass = 'card__suit_red';
  } else if (newCard[0].suit === 'hearts') {
    icon = '&hearts;';
    suitClass = 'card__suit_red';
  }
  desk.insertAdjacentHTML('beforeend', `
    <div class="card">
    <div class="card__name">${newCard[0].name}</div>
    <div class=${suitClass}>${icon}</div>
</div>
    `);
  counter += newCard[0].points;
  if (counter < 11 && newCard[0].name === 'ace') {
    newCard[0].points = 11;
  }
  counterContainer.innerHTML = counter;
}
function checkPoints() {
  if (counter > 21) {
    alert('Перебор!');
    location.reload();
  }
}
const stopButton = document.querySelector('.stop');
stopButton.addEventListener('click', () => {
  alert(`Ваш результат: ${counter}`);
  location.reload();
});

document.querySelector('.more').addEventListener('click', () => {
  takeOne();
  checkPoints();
});
