import { Injectable } from '@angular/core';

export interface EnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  message: string;
}

/**
 * Sends quote enquiries.
 *
 * INTEGRATION NOTE: set `endpoint` to a POST URL (your own API, Formspree,
 * Netlify Forms, a serverless function, etc.) to enable server-side delivery.
 * While it is empty, enquiries are handed off to the visitor's email app with
 * the message pre-filled — nothing is silently dropped.
 */
@Injectable({ providedIn: 'root' })
export class EnquiryService {
  /** POST endpoint for enquiries. Empty string = email-app handoff fallback. */
  readonly endpoint = '';

  private readonly to = 'shukranaconcrete2109@gmail.com';

  async submit(payload: EnquiryPayload): Promise<'sent' | 'email-handoff'> {
    if (this.endpoint) {
      const res = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(`Enquiry request failed with status ${res.status}`);
      }
      return 'sent';
    }

    const subject = `Website enquiry — ${payload.service || 'General'} — ${payload.fullName}`;
    const lines = [
      `Name: ${payload.fullName}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Service: ${payload.service || 'Not specified'}`,
      `Address: ${payload.address || 'Not specified'}`,
      '',
      payload.message || 'No additional details provided.',
    ];
    const mailto = `mailto:${this.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;

    try {
      window.location.href = mailto;
    } catch {
      // Environments that block navigation (e.g. tests) fall through — the
      // caller still reports the handoff so the user sees the email address.
    }
    return 'email-handoff';
  }
}