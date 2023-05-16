import { King } from './king';
import { Advisor } from './advisor';
import { Fighter } from './fighter';
import { Squire } from './squire';

const character1 = new King('Joffrey', 'Baratheon', '20', false, '1', '4');
const character2 = new Fighter(
  'Jaime',
  'Lannister',
  '43',
  true,
  'sword',
  '8',
  1
);
const character3 = new Fighter(
  'Daenerys',
  'Targaryen',
  '23',
  true,
  'dragon',
  '9',
  1
);
const character4 = new Advisor(
  'Tyrion',
  'Lannister',
  '32',
  true,
  'Daenerys',
  '5'
);
const character5 = new Squire(
  'Bronn',
  'Lannister',
  '46',
  true,
  'Jaime',
  '8',
  'speech'
);

const allCharacters = [];
allCharacters.push(character1, character2, character3, character4, character5);

const messages: string[] = [];

const giveMessage = () => {
  messages.push(
    character1.talk(),
    character2.talk(),
    character3.talk(),
    character4.talk(),
    character5.talk()
  );
  return messages;
};

console.log(character1.series);

giveMessage();

for (const message of messages) {
  console.log(message);
}

character2.kill();
character4.kill();
