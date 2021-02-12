import Spades from './Spades'
import Clubs from './Clubs'
import Diamonds from './Diamonds'
import Hearts from './Hearts'

let spadesArr = [],
    clubsArr = [],
    diamondsArr = [],
    heartsArr = [],
    pack = [],
    names = ['ace', 'jack', 'queen', 'king', 'six', 'seven', 'eight', 'nine', 'ten']
for (let n= 0; n < names.length; n++ ) {
        spadesArr.push(new Spades(names[n]))
        clubsArr.push(new Clubs(names[n]))
        diamondsArr.push(new Diamonds(names[n]))
        heartsArr.push(new Hearts(names[n]))
}
   pack =  pack.concat(spadesArr, clubsArr, diamondsArr, heartsArr);
    
    let desk = document.querySelector('.desk');
        
function takeOne() {
    
    let newCard = pack.splice(Math.floor(Math.random()*pack.length), 1);
    let icon;
    let suitClass;
    if (newCard[0].suit === 'spades') {
        icon = '&#9824;'
        suitClass = 'card__suit_black'
    } else if (newCard[0].suit === 'clubs') {
        icon = '&#9827;'
        suitClass = 'card__suit_black'
    } else if (newCard[0].suit === 'diamonds') {
        icon = '&diams;';
        suitClass = "card__suit_red";
        } else if (newCard[0].suit === 'hearts') {
        icon = '&hearts;';
        suitClass = "card__suit_red"
    }
    desk.insertAdjacentHTML('beforeend', `
    <div class="card">
    <div class="card__name">${newCard[0].name}</div>
    <div class=${suitClass}>${icon}</div>
</div>
    `
    );
}
function checkSuit() {
    let cardSuits = document.getElementsByClassName('card__suit');
    for (let c of cardSuits) {
        console.log(c.innerHTML)
        if (c.innerHTML ===  '&diams;' ) {
            c.classList.add('red')
        }
    }
}
document.querySelector('.more').addEventListener('click', () => {
    
    takeOne();
    
})