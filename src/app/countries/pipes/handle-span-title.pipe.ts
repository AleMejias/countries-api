import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'handleSpanTitle'
})
export class HandleSpanTitlePipe implements PipeTransform {

  transform( value: boolean ): string {

    let currentTile: string = "";

    if( value ) {
      currentTile = 'Light Mode'
    } else {
      currentTile = 'Dark Mode'
    }

    return currentTile;
  }

}
