import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.scss',
})
export class SectionHeading {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() align: 'center' | 'left' = 'center';
}
