export class Ability {
  
  score = [];
  modifier = [];

  constructor(newScores: Array<number>){
    this.score = newScores;
    this.calculateModifiers();
  }

  

  calculateModifiers(){
   let count;
    for (count = 0; count < 6; count++){
      this.modifier[count] = Math.floor( (this.score[0] - 10) / 2 );
    }
  }

  getScore(whichScore: string): number{
    switch (whichScore){
      case "str":
        return this.score[0]; break;
      case "dex":
        return this.score[1]; break;
      case "con":
        return this.score[2]; break;
      case "int":
        return this.score[3]; break;
      case "wis":
        return this.score[4]; break;
      case "cha":
        return this.score[5]; break;
    }
  }

  getModifier(whichModifier: string): number{
    switch (whichModifier){
      case "str":
        return this.modifier[0]; break;
      case "dex":
        return this.modifier[1]; break;
      case "con":
        return this.modifier[2]; break;
      case "int":
        return this.modifier[3]; break;
      case "wis":
        return this.modifier[4]; break;
      case "cha":
        return this.modifier[5]; break;
    }
  }


}
