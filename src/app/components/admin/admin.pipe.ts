import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'DecodeHtmlPipe'
})
export class DecodeHtmlPipe implements PipeTransform {
  transform(card: string) {
    const tempElement = document.createElement('div');
    switch (card.charAt(1)) {
      case('s'):
        tempElement.innerHTML = '&spades;';
        break;
      case('S'):
        tempElement.innerHTML = '&spades;';
        break;
      case('c' || 'C'):
        tempElement.innerHTML = '&clubs;';
        break;
      case('C'):
        tempElement.innerHTML = '&clubs;';
        break;
      case('d'):
        tempElement.innerHTML = '&diams;';
        break;
      case('D'):
        tempElement.innerHTML = '&diams;';
        break;
      case('h'):
        tempElement.innerHTML = '&hearts;';
        break;
      case('H'):
        tempElement.innerHTML = '&hearts;';
        break;
    }
    return tempElement.innerText;
  }
}
