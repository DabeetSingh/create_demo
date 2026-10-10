import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Projects } from './projects';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build a de-duplicated gallery from the Tasks service', () => {
    const paths = component.gallery.map((img) => img.src);
    expect(component.gallery.length).toBeGreaterThan(0);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('should give every photo a descriptive alt text', () => {
    expect(component.gallery.every((img) => img.alt.trim().length > 0)).toBe(true);
  });

  it('should filter the gallery by category', () => {
    component.setCategory('Concrete');
    const filtered = component.filtered();
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.length).toBeLessThan(component.gallery.length);
    // every filtered item must exist in the full gallery
    expect(filtered.every((img) => component.gallery.includes(img))).toBe(true);
  });

  it('should return the full gallery for the "All" category', () => {
    component.setCategory('All');
    expect(component.filtered().length).toBe(component.gallery.length);
  });

  it('should open and close the lightbox', () => {
    component.open(0);
    expect(component.activeIndex()).toBe(0);
    component.close();
    expect(component.activeIndex()).toBeNull();
  });
});
