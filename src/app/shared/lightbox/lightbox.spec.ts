import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lightbox, LightboxImage } from './lightbox';

describe('Lightbox', () => {
  let component: Lightbox;
  let fixture: ComponentFixture<Lightbox>;

  const images: LightboxImage[] = [
    { src: 'assets/images/concrete_1.jpeg', alt: 'Concrete project one' },
    { src: 'assets/images/concrete_2.jpeg', alt: 'Concrete project two' },
    { src: 'assets/images/concrete_3.jpeg', alt: 'Concrete project three' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lightbox],
    }).compileComponents();

    fixture = TestBed.createComponent(Lightbox);
    component = fixture.componentInstance;
    component.images = images;
    component.index = 0;
    await fixture.whenStable();
  });

  afterEach(() => {
    document.body.classList.remove('modal-open');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the current image', () => {
    expect(component.current?.src).toBe(images[0].src);
  });

  it('should navigate forward and wrap around', () => {
    component.next();
    expect(component.index).toBe(1);
    component.next();
    component.next();
    expect(component.index).toBe(0);
  });

  it('should navigate backward and wrap around', () => {
    component.prev();
    expect(component.index).toBe(images.length - 1);
  });

  it('should close on Escape', () => {
    let closed = false;
    component.closed.subscribe(() => (closed = true));
    component.onKeydown(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(closed).toBe(true);
  });

  it('should navigate with arrow keys', () => {
    component.onKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    expect(component.index).toBe(1);
    component.onKeydown(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(component.index).toBe(0);
  });

  it('should lock body scroll while open and release it on destroy', () => {
    expect(document.body.classList.contains('modal-open')).toBe(true);
    fixture.destroy();
    expect(document.body.classList.contains('modal-open')).toBe(false);
  });

  it('should render an accessible dialog', () => {
    const el = fixture.nativeElement as HTMLElement;
    const dialog = el.querySelector('[role="dialog"]');
    expect(dialog?.getAttribute('aria-modal')).toBe('true');
  });
});