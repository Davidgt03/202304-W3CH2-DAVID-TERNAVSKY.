/* eslint-disable max-params */
import { Character } from './characters';

export class Fighter extends Character {
  speech: string;
  weapon: string;
  skill: number;
  constructor(
    name: string,
    house: string,
    age: string,
    status: boolean,
    speech: string,
    weapon: string,
    skill: number
  ) {
    super(name, house, age, status, speech);
    this.weapon = weapon;
    this.skill = skill;
    this.speech = 'Primero pego y luego pregunto';
  }
}
