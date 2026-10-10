import { AfterViewInit, Directive, ElementRef, OnDestroy, input } from '@angular/core';

/**
 * Adds a scroll-reveal animation to the host element.
 * Usage: <section appReveal> or <section [appReveal]="120"> (stagger delay in ms).
 * Respects `prefers-reduced-motion` and degrades gracefully without IntersectionObserver.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class Reveal implements AfterViewInit, OnDestroy {
  /**
   * Delay before the element animates in, in milliseconds.
   * Accepts a number binding `[appReveal]="120"` or the static attribute
   * `appReveal` (treated as 0).
   */
  readonly appReveal = input<number | string>(0);

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    node.classList.add('reveal');
    const delayMs = Number(this.appReveal());
    if (Number.isFinite(delayMs) && delayMs > 0) {
      node.style.transitionDelay = `${delayMs}ms`;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}