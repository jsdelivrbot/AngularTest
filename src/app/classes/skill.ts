export class Skill {
  name: string;
  modifier: number;
  proficient: boolean;



  /*
  Skills are in the format: 

  NAME: MODIFIER.

  The modifier has the Proficiency bonus if proficient is true.

  ie 
  ath = ('Athletics', 1, true)  (assuming proficiency modifer is +2)
  Athletics: +3

  acr = ('Acrobatics', -2. false)
  Acrobatics: -2

  etc
  */
}