import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CtaBand } from '../shared/cta-band/cta-band';
import { Tasks } from '../tasks';
import { Lightbox, LightboxImage } from '../shared/lightbox/lightbox';

export type GalleryCategory = 'All' | 'Concrete' | 'Basement' | 'Interior' | 'Exterior';

@Component({
  selector: 'app-projects',
  imports: [CtaBand, MatIconModule, Lightbox],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private tasks = inject(Tasks);

  categories: GalleryCategory[] = ['All', 'Concrete', 'Basement', 'Interior', 'Exterior'];

  active = signal<GalleryCategory>('All');
  activeIndex = signal<number | null>(null);

  /** Gallery items derived from the Tasks service (single source of truth). */
  gallery: LightboxImage[] = [];

  /** Category tag parallel to `gallery`, used by the filter. */
  private tags: string[] = [];

  constructor() {
    const sources: [GalleryCategory, string[]][] = [
      ['Concrete', this.tasks.concrete.list],
      ['Basement', this.tasks.basement.list],
      ['Interior', this.tasks.interior.list],
      ['Exterior', this.tasks.exterior.list],
    ];

    // De-duplicate across categories: first appearance wins (Concrete >
    // Basement > Interior > Exterior) so every photo shows once in "All".
    for (const [category, list] of sources) {
      for (const src of list) {
        if (this.gallery.some((g) => g.src === src)) {
          continue;
        }
        this.gallery.push({ src, alt: this.altFor(src, category) });
        this.tags.push(category);
      }
    }
  }

  filtered(): LightboxImage[] {
    const active = this.active();
    if (active === 'All') {
      return this.gallery;
    }
    return this.gallery.filter((_, i) => this.tags[i] === active);
  }

  setCategory(category: GalleryCategory): void {
    this.active.set(category);
  }

  open(index: number): void {
    this.activeIndex.set(index);
  }

  close(): void {
    this.activeIndex.set(null);
  }

  private altFor(src: string, category: string): string {
    const file = src.split('/').pop()?.replace(/\.jpe?g$/i, '').replace(/[._]/g, ' ') ?? 'project';
    return `${category} project — ${file}`;
  }
}
