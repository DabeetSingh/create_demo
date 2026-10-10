import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Tasks } from '../tasks';
import { SERVICES, ServiceItem } from '../shared/service-data';
import { SectionHeading } from '../shared/section-heading/section-heading';
import { CtaBand } from '../shared/cta-band/cta-band';
import { ServiceCard } from '../shared/service-card/service-card';
import { Reveal } from '../shared/reveal.directive';

@Component({
  selector: 'app-home-page',
  imports: [MatIconModule, RouterLink, SectionHeading, CtaBand, ServiceCard, Reveal],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  constructor(private task: Tasks, private router: Router) {}

  services = SERVICES;

  badges = [
    { icon: 'workspace_premium', label: 'Quality Workmanship' },
    { icon: 'schedule', label: 'On-Time Completion' },
    { icon: 'construction', label: 'Durable Results' },
    { icon: 'location_on', label: 'Local & Trusted in Calgary' },
  ];

  openService(service: ServiceItem) {
    this.task.setTopic(service.title, service.topic);
    this.router.navigate(['/service-details']);
  }
}
