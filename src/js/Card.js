export default class Card {
  constructor(name, suit, points) {
    this.name = name;
    this.suit = suit;
    this.points = points;
    switch (this.name) {
      case 'ace':
        this.points = 1;
        break;
      case 'jack':
        this.points = 2;
        break;
      case 'queen':
        this.points = 3;
        break;
      case 'king':
        this.points = 4;
        break;
      case 'six':
        this.points = 6;
        break;
      case 'seven':
        this.points = 7;
        break;
      case 'eight':
        this.points = 8;
        break;
      case 'nine':
        this.points = 9;
        break;
      case 'ten':
        this.points = 10;
    }
  }
}
