import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Services } from './services';
import { Tasks } from '../tasks';

describe('Services', () => {
  let component: Services;
  let fixture: ComponentFixture<Services>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Services],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Services);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list the core services without Custom Concrete', () => {
    expect(component.services.length).toBeGreaterThan(0);
    expect(component.services.every((s) => s.title !== 'Custom Concrete')).toBe(true);
  });

  it('should hand the selected service to the Tasks service', () => {
    const tasks = TestBed.inject(Tasks);
    const first = component.services[0];
    component.openService(first);
    let emitted: any;
    tasks.seriveTopic.subscribe((value) => (emitted = value));
    expect(emitted?.title).toBe(first.title);
  });
});
