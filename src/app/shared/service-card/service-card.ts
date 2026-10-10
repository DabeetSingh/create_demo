import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-service-card',
  imports: [MatIconModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  @Input() title = '';
  @Input() image = '';
  @Output() open = new EventEmitter<void>();
}
