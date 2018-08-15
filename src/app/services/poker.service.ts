import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PokerService {

  constructor(private http: HttpClient) { }

  getHands() { // service function name, returns payload from here
    return this.http.get('/server/api/v1/pokergame');
  }

  getHand(userName: string) {
    return this.http.get('server/api/v1/pokergame/' + userName);
  }

  createHand(hand) {
    const body = JSON.stringify(hand);
    return this.http.post('server/api/v1/pokergame', body, httpOptions);
  }
}
