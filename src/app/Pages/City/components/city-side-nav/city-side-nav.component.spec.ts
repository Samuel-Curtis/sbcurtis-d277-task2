import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySideNavComponent } from './city-side-nav.component';

describe('CitySideNavComponent', () => {
  let component: CitySideNavComponent;
  let fixture: ComponentFixture<CitySideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitySideNavComponent]
    });
    fixture = TestBed.createComponent(CitySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
