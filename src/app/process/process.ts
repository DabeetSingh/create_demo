import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SectionHeading } from '../shared/section-heading/section-heading';
import { CtaBand } from '../shared/cta-band/cta-band';

@Component({
  selector: 'app-process',
  imports: [MatIconModule, SectionHeading, CtaBand],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  steps = [
    { num: '01', title: 'Consultation', text: 'We discuss your needs and provide expert recommendations.', image: 'assets/images/Media_1.jpeg' },
    { num: '02', title: 'Planning', text: 'We create a detailed plan and provide a clear estimate.', image: 'assets/images/Media_2.jpeg' },
    { num: '03', title: 'Execution', text: 'Our skilled team gets to work with precision and care.', image: 'assets/images/concrete_1.6.jpeg' },
    { num: '04', title: 'Completion', text: 'We deliver high-quality results on time, every time.', image: 'assets/images/exterior_main.jpeg' },
  ];

  benefits = [
    { icon: 'forum', title: 'Clear Communication', text: 'You always know what’s happening and when.' },
    { icon: 'payments', title: 'No Hidden Costs', text: 'Transparent pricing with no surprises.' },
    { icon: 'handyman', title: 'Quality Craftsmanship', text: 'Skilled tradespeople and premium materials.' },
    { icon: 'schedule', title: 'On-Time Delivery', text: 'We respect your timeline and your budget.' },
  ];
}
