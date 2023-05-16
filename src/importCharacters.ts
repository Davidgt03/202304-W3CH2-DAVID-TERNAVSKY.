import { Advisor } from './advisor';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

const characFight = new Fighter(
  'Daenerys',
  'Targaryen',
  '25',
  true,
  '5',
  'axe',
  5
);
const characKing = new King('Joffrey', 'Baratheon', '20', true, '6', '5');
const characFighter = new Fighter(
  'Jamie',
  'Lannister',
  '30',
  true,
  '7',
  'sword',
  4
);
const characAdvisor = new Advisor(
  'Tyrion',
  'Lannister',
  '35',
  true,
  'Daenerys',
  '5'
);
const characSquire = new Squire(
  'Bronn',
  'Lannister',
  '40',
  true,
  '5',
  'Jamie',
  '10'
);

export const characs = [
  characKing,
  characFighter,
  characFight,
  characAdvisor,
  characSquire,
];
