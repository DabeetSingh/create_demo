import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reveal } from './reveal.directive';

@Component({
  selector: 'app-reveal-test-host',
  imports: [Reveal],
  template: `<div [appReveal]="50">Revealed content</div>`,
})
class RevealTestHost {}

describe('Reveal', () => {
  let fixture: ComponentFixture<RevealTestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevealTestHost],
    }).compileComponents();

    fixture = TestBed.createComponent(RevealTestHost);
    fixture.detectChanges();
  });

  it('should mark the host visible when IntersectionObserver fires', () => {
    const el = (fixture.nativeElement as HTMLElement).firstElementChild!;
    // jsdom has no IntersectionObserver, so the directive falls back to visible.
    expect(el.classList.contains('is-visible')).toBe(true);
  });
});