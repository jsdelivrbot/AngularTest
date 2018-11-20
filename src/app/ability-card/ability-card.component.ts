import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../classes/attribute';
@Component({
  selector: 'app-ability-card',
  templateUrl: './ability-card.component.html',
  styleUrls: ['./ability-card.component.css']
})
export class AbilityCardComponent implements OnInit {
  //Displays an attribute and it's name in a small box.
  @Input() attribute: Attribute;
  
  constructor() { }

  ngOnInit() {
     
    }

}
