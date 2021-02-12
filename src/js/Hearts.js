import Card from './Card';

export default class Hearts extends Card {
  constructor(name, points) {
    super(name, points);
    this.suit = 'hearts';
  }
}
