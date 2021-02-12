import Card from './Card'

export default class Diamonds extends Card {
    constructor(name, points) {
        super(name, points);
        this.suit = "diamonds"
    }
}