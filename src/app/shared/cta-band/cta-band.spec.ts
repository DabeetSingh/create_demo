import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CtaBand } from './cta-band';

describe('CtaBand', () => {
  let component: CtaBand;
  let fixture: ComponentFixture<CtaBand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaBand],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaBand);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
