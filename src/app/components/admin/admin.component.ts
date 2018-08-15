import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {PokerService} from '../../services/poker.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public hand;

  constructor(private pokerService: PokerService) { }

  ngOnInit() {
    this.getHands(); // calls it when service is running
  }

  getHands() {
    this.pokerService.getHands().subscribe(
      data => {
        this.hand = data;
      },
      err => console.error(err),
      () => console.log('poker hand loaded')
    );
  }

  getRank(card: string) {
    return card.charAt(0).toUpperCase();
  }

  getSuit(card: string) {
    const s = [];
    s.push('card rank-');
    s.push(this.getRank(card));
    s.push(' ');
    switch (card.charAt(1)) {
      case('s'):
        s.push('spades');
        break;
      case('S'):
        s.push('spades');
        break;
      case('c'):
      s.push('clubs');
        break;
      case('C'):
        s.push('clubs');
        break;
      case('d'):
        s.push('diams');
        break;
      case('D'):
        s.push('diams');
        break;
      case('h'):
        s.push('hearts');
        break;
      case('H'):
        s.push('hearts');
        break;
    }
    return s.join('');
  }
}
