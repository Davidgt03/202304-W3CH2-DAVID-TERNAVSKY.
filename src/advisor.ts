/* eslint-disable max-params */
import { Character } from './characters';

export class Advisor extends Character {
  advisedCharacter: string;
  speech: string;
  constructor(
    name: string,
    house: string,
    age: string,
    status: boolean,
    speech: string,
    advisedCharacter: string
  ) {
    super(name, house, age, status, speech);
    this.advisedCharacter = advisedCharacter;
    this.speech = 'No sé por qué, pero creo que voy a morir pronto';
  }
}
