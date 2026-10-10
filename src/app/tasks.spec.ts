import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Tasks } from './tasks';

describe('Tasks', () => {
  let service: Tasks;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    service = TestBed.inject(Tasks);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
