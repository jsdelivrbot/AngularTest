import { Attribute } from './attribute';
import { Skill } from './skill';

export class Character {
  name: String;



  /* Attributes */
  str: Attribute;
  dex: Attribute;
  con: Attribute;
  int: Attribute;
  wis: Attribute;
  cha: Attribute;

  ath: Skill;
}