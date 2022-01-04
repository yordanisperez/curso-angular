import { TestBed } from '@angular/core/testing';

import { ImagesObservableService } from './images-observable.service';

describe('ImagesObservableService', () => {
  let service: ImagesObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
