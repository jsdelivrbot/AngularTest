import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../classes/hero';
import { Character} from '../classes/character';
import { Attribute } from '../classes/attribute';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  myChar: Character;
  strAttribute: Attribute;
  dexAttribute: Attribute;

  constructor() { }

  ngOnInit() {
   this.strAttribute = new Attribute(12, 'Strength', 'STR');
   this.dexAttribute = new Attribute(8, 'Dexterity', 'DEX');
  }
  
}
