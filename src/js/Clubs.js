import Card from './Card';

export default class Clubs extends Card {
  constructor(name, points) {
    super(name, points);
    this.suit = 'clubs';
  }
}
