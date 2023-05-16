/* eslint-disable max-params */
export class Character {
  name: string;
  speech: string;
  age: string;
  house: string;
  status: boolean;
  series: string;
  constructor(
    name: string,
    house: string,
    age: string,
    status: boolean,
    speech: string
  ) {
    this.name = name;
    this.house = house;
    this.age = age;
    this.status = status;
    this.speech = speech;
    this.series = 'Game of thrones';
  }

  belong() {
    return this.series;
  }

  kill() {
    this.status = false;
    return this.status;
  }

  talk() {
    return this.speech;
  }
}
