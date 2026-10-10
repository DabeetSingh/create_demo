import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CtaBand } from '../shared/cta-band/cta-band';
import { Questions } from '../questions/questions';
import { EnquiryService, EnquiryPayload } from '../shared/enquiry.service';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatIconModule, CtaBand, Questions],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);
  // Optional: TestBed-created components may not have a route context.
  private route = inject(ActivatedRoute, { optional: true });
  private enquiry = inject(EnquiryService);

  services = [
    'Driveways',
    'Patios',
    'Sidewalks',
    'Garage Floors',
    'Foundations',
    'Custom Concrete',
    'Other',
  ];

  status = signal<SubmitStatus>('idle');
  attempted = false;

  quoteForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    service: ['', Validators.required],
    address: [''],
    message: [''],
  });

  constructor() {
    // Pre-select the service when arriving via ?service=… deep links.
    this.route?.queryParamMap.subscribe((params) => {
      const service = params.get('service');
      if (service && this.services.includes(service)) {
        this.quoteForm.patchValue({ service });
      }
    });
  }

  hasError(field: string): boolean {
    const control = this.quoteForm.get(field);
    return !!control && control.invalid && (this.attempted || control.touched);
  }

  async onSubmit(): Promise<void> {
    if (this.quoteForm.invalid) {
      this.attempted = true;
      this.quoteForm.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    const payload = this.quoteForm.getRawValue() as EnquiryPayload;

    try {
      await this.enquiry.submit(payload);
      this.status.set('success');
      this.quoteForm.reset();
      this.attempted = false;
    } catch {
      this.status.set('error');
    }
  }
}
