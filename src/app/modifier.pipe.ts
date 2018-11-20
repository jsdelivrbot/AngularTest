import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifier'
})
export class ModifierPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    let tempModifier = Math.floor( (value - 10) /2 );
    if (tempModifier > 0){
      return ('+' + tempModifier );
    }
    else{
      return tempModifier.toString();
    }
    
  }

}