import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Tasks } from '../tasks';
import { SERVICES, ServiceItem } from '../shared/service-data';
import { CtaBand } from '../shared/cta-band/cta-band';

@Component({
  selector: 'app-services',
  imports: [MatIconModule, CtaBand, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  constructor(private task: Tasks, private router: Router) {}

  services = SERVICES.filter((service) => service.title !== 'Custom Concrete');

  openService(service: ServiceItem) {
    this.task.setTopic(service.title, service.topic);
    this.router.navigate(['/service-details']);
  }

  /** Deep-links to the contact form with this service pre-selected. */
  requestQuote(service: ServiceItem) {
    this.router.navigate(['/contact'], { queryParams: { service: service.title } });
  }
}
