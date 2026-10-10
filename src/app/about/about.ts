import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SectionHeading } from '../shared/section-heading/section-heading';

@Component({
  selector: 'app-about',
  imports: [MatIconModule, RouterLink, SectionHeading],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  values = [
    { icon: 'verified', title: 'Integrity', text: 'In everything we do.' },
    { icon: 'workspace_premium', title: 'Quality', text: 'You can trust.' },
    { icon: 'groups', title: 'A Team That Cares', text: 'Built for our community.' },
    { icon: 'foundation', title: 'Built in Our Community', text: 'Proudly serving Calgary and surrounding areas.' },
  ];

  pillars = [
    {
      icon: 'flag',
      title: 'Our Mission',
      text: 'To deliver superior concrete solutions with honesty, quality, and a commitment to our community.',
    },
    {
      icon: 'visibility',
      title: 'Our Vision',
      text: 'To be Calgary’s most trusted concrete partner, known for lasting craftsmanship.',
    },
    {
      icon: 'diamond',
      title: 'Our Values',
      text: 'Integrity. Quality. Respect. And gratitude in every project we take on.',
    },
  ];

  whyChoose = [
    { icon: 'engineering', title: 'Experienced Team' },
    { icon: 'workspace_premium', title: 'High-Quality Materials' },
    { icon: 'schedule', title: 'On-Time Completion' },
    { icon: 'location_on', title: 'Local & Trusted in Calgary' },
  ];
}
