import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Process } from './process';

describe('Process', () => {
  let component: Process;
  let fixture: ComponentFixture<Process>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Process],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Process);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
