export class Attribute {
  score: number;
  name: string;
  shortname: string;

  constructor(newScore: number, newName: string, newShortName: string){
    this.score = newScore;
    this.name = newName;
    this.shortname = newShortName;
  }

  getScore(): number{
    return this.score;
  }
  setScore(newScore: number){
    this.score = newScore;
  }

  getName(): string{
    return this.name;
  }
  getShortName(): string{
    return this.shortname;
  }

  getModifier(): number{
    return Math.floor( (this.score - 10 / 2) );
  }

}