import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PokerService} from '../../services/poker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCards: string[] = [
    '2s', '2h', '2d', '2c', '3s', '3h', '3d', '3c', '4s', '4h', '4d', '4c', '5s', '5h', '5d', '5c',
    '6s', '6h', '6d', '6c', '7s', '7h', '7d', '7c', '8s', '8h', '8d', '8c', '9s', '9h', '9d', '9c', 'Ts', 'Th', 'Td', 'Tc',
    'Js', 'Jh', 'Jd', 'Jc', 'Qs', 'Qh', 'Qd', 'Qc', 'As', 'Ah', 'Ad', 'Ac',
  ];

  pokerForm: FormGroup;
  validMessage = '';
  constructor(private pokerService: PokerService) { }

  ngOnInit() {
    this.pokerForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      card1: new FormControl('', Validators.required),
      card2: new FormControl('', Validators.required),
      card3: new FormControl('', Validators.required),
      card4: new FormControl('', Validators.required),
      card5: new FormControl('', Validators.required),
    });
  }

  submitRegistration() {
    if (this.pokerForm.valid) {
      this.validMessage = 'Successfully submitted poker hand!';
      this.pokerService.createHand(this.pokerForm.value).subscribe(
        data => {
          this.pokerForm.reset();
          window.location.href = '/admin';
          return true;
        },
        error => {
          return error;
        }
      );
    } else {
      this.validMessage = 'Please fill out any missing blanks or enter valid input!';
    }
  }

}
