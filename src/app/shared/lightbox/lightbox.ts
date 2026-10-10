import { Component, ElementRef, HostListener, Input, Output, EventEmitter, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface LightboxImage {
  src: string;
  alt: string;
}

/**
 * Accessible full-screen image viewer.
 * Handles: previous/next/close buttons, Escape, arrow keys, focus trap,
 * scroll lock, ARIA dialog semantics, and focus restoration on close.
 */
@Component({
  selector: 'app-lightbox',
  imports: [MatIconModule],
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.scss',
})
export class Lightbox implements AfterViewInit, OnDestroy {
  @Input({ required: true }) images: LightboxImage[] = [];
  @Input() index = 0;
  @Output() closed = new EventEmitter<void>();

  @ViewChild('closeBtn') closeBtn?: ElementRef<HTMLButtonElement>;

  private previouslyFocused?: HTMLElement;

  get current(): LightboxImage | undefined {
    return this.images[this.index];
  }

  ngAfterViewInit(): void {
    this.previouslyFocused = document.activeElement as HTMLElement | null ?? undefined;
    document.body.classList.add('modal-open');
    this.closeBtn?.nativeElement.focus();
  }

  ngOnDestroy(): void {
    document.body.classList.remove('modal-open');
    this.previouslyFocused?.focus?.();
  }

  close(): void {
    this.closed.emit();
  }

  prev(): void {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }

  next(): void {
    this.index = (this.index + 1) % this.images.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.close();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.prev();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.next();
        break;
      case 'Home':
        event.preventDefault();
        this.index = 0;
        break;
      case 'End':
        event.preventDefault();
        this.index = this.images.length - 1;
        break;
    }
  }

  /** Keeps Tab focus inside the dialog. */
  @HostListener('document:focusin', ['$event'])
  onFocusin(event: FocusEvent): void {
    const dialog = document.getElementById('lightbox-dialog');
    if (dialog && event.target instanceof Node && !dialog.contains(event.target)) {
      event.stopPropagation();
      this.closeBtn?.nativeElement.focus();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('lightbox-backdrop')) {
      this.close();
    }
  }
}