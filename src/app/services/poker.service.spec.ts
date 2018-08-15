import { TestBed, inject } from '@angular/core/testing';

import { PokerService } from './poker.service';

describe('PokerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokerService]
    });
  });

  it('should be created', inject([PokerService], (service: PokerService) => {
    expect(service).toBeTruthy();
  }));
});
