/* eslint-disable max-params */
import { Character } from './characters';

export class Squire extends Character {
  served;
  flattery;
  constructor(
    name: string,
    house: string,
    age: string,
    status: boolean,
    speech: string,
    served: string,
    flattery: string
  ) {
    super(name, house, age, status, speech);
    this.served = served;
    this.flattery = flattery;
    this.speech = 'Soy un loser';
  }
}
