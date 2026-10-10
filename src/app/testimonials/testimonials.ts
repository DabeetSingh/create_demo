import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CtaBand } from '../shared/cta-band/cta-band';

interface Testimonial {
  name: string;
  city: string;
  rating: number;
  quote: string;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [MatIconModule, CtaBand],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      name: 'Jaspreet K.',
      city: 'Calgary, AB',
      rating: 5,
      quote: 'Excellent work and professional service. Our driveway looks amazing! Highly recommend.',
      image: 'assets/images/concrete_1.jpeg',
    },
    {
      name: 'Harpreet S.',
      city: 'Calgary, AB',
      rating: 5,
      quote: 'The team was punctual, professional, and delivered exactly what we wanted. Great quality and fair pricing.',
      image: 'assets/images/Deck_1.jpeg',
    },
    {
      name: 'Manpreet D.',
      city: 'Calgary, AB',
      rating: 5,
      quote: 'Beautiful work! Very happy with the results and the customer service. Will definitely hire again.',
      image: 'assets/images/concrete_4.jpeg',
    },
    {
      name: 'Gurpreet L.',
      city: 'Airdrie, AB',
      rating: 5,
      quote: 'Shukrana Concrete exceeded our expectations. Professional, reliable, and a keen attention to detail.',
      image: 'assets/images/concrete_1.7.jpeg',
    },
  ];

  stars(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }
}
