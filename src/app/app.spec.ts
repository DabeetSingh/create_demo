import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the brand name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.brand-text strong')?.textContent).toContain('SHUKRANA');
  });

  it('should render a skip link for keyboard users', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.skip-link')?.textContent).toContain('Skip to main content');
  });

  it('should render the mobile quick-action bar with call and quote links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const actions = compiled.querySelectorAll('.mobile-action');
    expect(actions.length).toBe(3);
    expect(actions[0].getAttribute('href')).toBe('tel:+16475729029');
  });

  it('should close the mobile menu on Escape', async () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    await fixture.whenStable();
    app.isMenuOpen = true;
    app.onEscape();
    expect(app.isMenuOpen).toBe(false);
  });
});
