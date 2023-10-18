import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityLandingComponent } from './city-landing.component';

describe('CityLandingComponent', () => {
  let component: CityLandingComponent;
  let fixture: ComponentFixture<CityLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityLandingComponent]
    });
    fixture = TestBed.createComponent(CityLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
