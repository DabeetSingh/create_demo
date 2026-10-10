import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Tasks } from '../tasks';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Lightbox, LightboxImage } from '../shared/lightbox/lightbox';

@Component({
  selector: 'app-services-details',
  imports: [MatIconModule, RouterLink, Lightbox],
  templateUrl: './services-details.html',
  styleUrl: './services-details.scss',
})
export class ServicesDetails implements OnInit, OnDestroy {

  sourceData: any;
  activeIndex = signal<number | null>(null);
  private sub?: Subscription;

  constructor(private task: Tasks, private router: Router) {}

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.task.setTopic('', '');
  }

  ngOnInit(): void {
    this.sub = this.task.getlist().subscribe((data) => {
      this.sourceData = data;
    });
  }

  get images(): LightboxImage[] {
    const list: string[] = this.sourceData?.list?.list ?? [];
    return list.map((src: string) => ({
      src,
      alt: `${this.sourceData?.title ?? 'Service'} project — ${src.split('/').pop()?.replace(/\.jpe?g$/i, '') ?? ''}`,
    }));
  }

  openImage(index: number): void {
    this.activeIndex.set(index);
  }

  closeImage(): void {
    this.activeIndex.set(null);
  }

  return() {
    this.router.navigate(['/']);
  }
}
