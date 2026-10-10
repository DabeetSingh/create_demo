import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ServicesDetails } from './services-details';

describe('ServicesDetails', () => {
  let component: ServicesDetails;
  let fixture: ComponentFixture<ServicesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesDetails],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
