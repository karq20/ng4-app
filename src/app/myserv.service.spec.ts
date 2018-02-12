import { TestBed, inject } from '@angular/core/testing';

import { MyservService } from './myserv.service';

describe('MyservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyservService]
    });
  });

  it('should be created', inject([MyservService], (service: MyservService) => {
    expect(service).toBeTruthy();
  }));
});
