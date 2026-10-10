import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Contact } from './contact';
import { EnquiryService } from '../shared/enquiry.service';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideRouter([]), EnquiryService],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start in idle state', () => {
    expect(component.status()).toBe('idle');
  });

  it('should not submit an invalid form and should flag errors', async () => {
    await component.onSubmit();
    expect(component.attempted).toBe(true);
    expect(component.status()).toBe('idle');
    expect(component.hasError('fullName')).toBe(true);
    expect(component.hasError('email')).toBe(true);
  });

  it('should submit a valid form and reach a success state', async () => {
    component.quoteForm.setValue({
      fullName: 'Test User',
      email: 'test@example.com',
      phone: '403-555-0100',
      service: 'Driveways',
      address: '',
      message: 'Hello',
    });

    await component.onSubmit();
    await fixture.whenStable();

    expect(component.status()).toBe('success');
    expect(component.quoteForm.value.fullName).toBeNull();
  });

  it('should pre-select a service when the query param matches', () => {
    component.quoteForm.patchValue({ service: 'Patios' });
    expect(component.quoteForm.value.service).toBe('Patios');
  });
});
