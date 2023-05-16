/* eslint-disable max-params */
import { Character } from './characters';

export class King extends Character {
  kingYears;
  constructor(
    name: string,
    house: string,
    age: string,
    status: boolean,
    speech: string,
    kingYears: string
  ) {
    super(name, house, age, status, speech);
    this.kingYears = kingYears;
    this.speech = 'Vais a morir todos';
  }
}
