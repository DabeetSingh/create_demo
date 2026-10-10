import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questions } from './questions';

describe('Questions', () => {
  let component: Questions;
  let fixture: ComponentFixture<Questions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Questions],
    }).compileComponents();

    fixture = TestBed.createComponent(Questions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one FAQ open by default', () => {
    expect(component.faqs.some((f) => f.open)).toBe(true);
  });

  it('should toggle a FAQ open', () => {
    component.toggle(1);
    expect(component.faqs[1].open).toBe(true);
  });

  it('should close other FAQs when one opens (single-open accordion)', () => {
    component.toggle(0);
    component.toggle(2);
    expect(component.faqs[2].open).toBe(true);
    expect(component.faqs[0].open).toBe(false);
  });

  it('should toggle a FAQ closed when clicked again', () => {
    component.toggle(0);
    expect(component.faqs[0].open).toBe(false);
  });

  it('should render buttons with aria-expanded', async () => {
    const el = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
    fixture.detectChanges();
    const buttons = el.querySelectorAll('.accordion-header');
    expect(buttons.length).toBe(component.faqs.length);
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true');
  });
});
